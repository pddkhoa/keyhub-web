import { isEmpty } from "lodash";
import { useState } from "react";
import { PiMagnifyingGlassBold, PiFunnel, PiTextColumns } from "react-icons/pi";
import { useMedia } from "react-use";
import {
  Title,
  cn,
  Input,
  Button,
  Popover,
  CheckboxGroup,
  Checkbox,
  ActionIcon,
} from "rizzui";
import { Table, TableProps } from "./Table";

type ControlledTableProps = {
  isLoading?: boolean;
  showLoadingText?: boolean;
  filterElement?: React.ReactElement;
  filterOptions?: TableFilterProps;
  tableFooter?: React.ReactNode;
  className?: string;
  paginatorOptions?: TablePaginationProps;
  paginatorClassName?: string;
} & TableProps;

export function ControlledTable({
  isLoading,
  filterElement,
  filterOptions,
  tableFooter,
  paginatorOptions,
  showLoadingText,
  className,
  ...tableProps
}: ControlledTableProps) {
  if (isLoading) {
    return (
      <div className="grid h-full min-h-[128px] flex-grow place-content-center items-center justify-center">
        {/* <Spinner size="xl" /> */}
        {showLoadingText ? (
          <Title as="h6" className="-me-2 mt-4 font-medium text-gray-500">
            Loading...
          </Title>
        ) : null}
      </div>
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      {!isEmpty(filterOptions) && (
        <TableFilter {...filterOptions}>{filterElement}</TableFilter>
      )}

      <div className="relative bg-gray-900">
        <Table
          scroll={{ x: 1000, y: 1000 }}
          rowKey={(record) => record.id}
          className={cn(className)}
          {...tableProps}
        />

        {tableFooter ? tableFooter : null}
      </div>

      {!isEmpty(paginatorOptions) && (
        <TablePagination
          // paginatorClassName={paginatorClassName}
          {...paginatorOptions}
        />
      )}
    </>
  );
}

export type TableFilterProps = {
  searchTerm: string;
  onSearchClear: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: { [key: string]: any }[];
  checkedColumns: string[];
  setCheckedColumns: React.Dispatch<React.SetStateAction<string[]>>;
  hideIndex?: number;
  children?: React.ReactNode;
  drawerTitle?: string;
  hasSearched?: boolean;
  showSearchOnTheRight?: boolean;
  enableDrawerFilter?: boolean;
  menu?: React.ReactNode;
};

export function TableFilter({
  searchTerm,
  onSearchClear,
  onSearchChange,
  columns,
  checkedColumns,
  setCheckedColumns,
  hideIndex,
  enableDrawerFilter = false,
  showSearchOnTheRight = false,
  menu,
  children,
}: TableFilterProps) {
  const isMediumScreen = useMedia("(max-width: 1860px)", false);
  const [showFilters, setShowFilters] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="table-filter mb-4 flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-4">
        {!showSearchOnTheRight ? (
          <Input
            type="search"
            placeholder="Search by anything..."
            value={searchTerm}
            onClear={onSearchClear}
            onChange={onSearchChange}
            inputClassName="h-12 text-white space-x-2 focus:outline-none ring-0"
            clearable={true}
            className="focus:ring-0"
            prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
          />
        ) : null}

        {showSearchOnTheRight && enableDrawerFilter ? (
          <>{menu ? menu : null}</>
        ) : null}
      </div>

      <div className="ms-4 flex flex-shrink-0 items-center text-white">
        {children ? (
          <Button
            {...(isMediumScreen || enableDrawerFilter
              ? {
                  onClick: () => {
                    setOpenDrawer(() => !openDrawer);
                  },
                }
              : { onClick: () => setShowFilters(() => !showFilters) })}
            variant={"outline"}
            className={cn(
              "me-2.5 h-9 pe-3 ps-2.5",
              !(isMediumScreen || enableDrawerFilter) &&
                showFilters &&
                "border-dashed border-gray-700"
            )}
          >
            <PiFunnel
              className="me-1.5 text-white h-[18px] w-[18px]"
              strokeWidth={1.7}
            />
            {!(isMediumScreen || enableDrawerFilter) && showFilters
              ? "Hide Filters"
              : "Filters"}
          </Button>
        ) : null}

        <ToggleColumns
          columns={columns}
          checkedColumns={checkedColumns}
          setCheckedColumns={setCheckedColumns}
          hideIndex={hideIndex}
        />
      </div>
    </div>
  );
}

type ToggleColumnsTypes<T> = {
  columns: T[];
  checkedColumns: string[];
  setCheckedColumns: React.Dispatch<React.SetStateAction<string[]>>;
  hideIndex?: number;
};

export function ToggleColumns<T>({
  columns,
  checkedColumns,
  setCheckedColumns,
  hideIndex,
}: ToggleColumnsTypes<T>) {
  return (
    <div className="">
      <Popover
        content={() => (
          <div className=" text-left rtl:text-right">
            <Title as="h6" className="mb-1 px-0.5 text-sm font-semibold">
              Toggle Columns
            </Title>
            <CheckboxGroup
              values={checkedColumns}
              setValues={setCheckedColumns}
              className="grid grid-cols-2 gap-x-6 gap-y-5 px-1.5 pb-3.5 pt-4"
            >
              {columns.map((column: any, index) => (
                <Checkbox
                  key={column.dataIndex}
                  value={column.dataIndex}
                  label={column.dataIndex}
                  labelClassName="ml-2 rtl:mr-2 text-[13px] font-medium"
                  containerClassName="cursor-pointer capitalize"
                  className={cn(
                    hideIndex && index === hideIndex ? "hidden" : ""
                  )}
                />
              ))}
            </CheckboxGroup>
          </div>
        )}
        shadow="sm"
        placement="bottom-end"
        className="bg-gray-100 [&>svg]:fill-gray-100"
      >
        <ActionIcon variant="outline" title={"Toggle Columns"}>
          <PiTextColumns strokeWidth={3} className=" h-6 w-6" />
        </ActionIcon>
      </Popover>
    </div>
  );
}

import React from "react";
import TablePagination, { TablePaginationProps } from "./Pagination";
