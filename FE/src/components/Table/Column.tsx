import { Link } from "react-router-dom";
import { Checkbox, Tooltip, ActionIcon, Badge, AvatarProps, cn } from "rizzui";
import { HeaderCell } from "./Table";
import DeletePopover from "../Popover/delete";
import { formatDate } from "@/lib/formate-date";
// import { EditUser } from "../Form/EditUser";

// eslint-disable-next-line react-hooks/rules-of-hooks

export const getColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  openModal,
}: Columns) => [
  {
    title: (
      <div className="ps-2 ">
        <Checkbox
          title={"Select All"}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer rounded-xl"
        />
      </div>
    ),
    dataIndex: "checked",
    key: "checked",
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: "customer",
    key: "customer",
    width: 250,
    hidden: "customer",

    render: (_: string, row: any) => (
      <AvatarCard
        src={row.avatar}
        name={row.userName}
        description={`HPT-${row.id}`}
      />
    ),
  },
  {
    title: <HeaderCell title="price" />,
    dataIndex: "price",
    key: "price",
    width: 250,
    render: (email: string) => email.toLowerCase(),
  },
  {
    title: (
      <HeaderCell
        title="Created"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "createdAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("createdAt"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      // <HeaderCell
      //   title="Modified"
      //   sortable
      //   ascending={
      //     sortConfig?.direction === "asc" && sortConfig?.key === "modifiedAt"
      //   }
      // />
      <HeaderCell title="Modified" />
    ),
    onHeaderCell: () => onHeaderCellClick("modifiedAt"),
    dataIndex: "modifiedAt",
    key: "modifiedAt",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <></>,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-start gap-3 pe-3">
        <Tooltip
          size="sm"
          content={() => "Edit Invoice"}
          placement="top"
          color="invert"
        >
          <ActionIcon
            onClick={() => {
              openModal({
                view: <div>Hello</div>,
                customSize: "480px",
              }),
                console.log(data),
                console.log("open");
            }}
            tag="span"
            size="sm"
            variant="outline"
            className="hover:!border-gray-900 hover:text-gray-700 cursor-pointer"
          >
            <PencilIcon />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => "View Invoice"}
          placement="top"
          color="invert"
        >
          <Link to={`/users/${row.id}`}>
            <ActionIcon
              tag="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the invoice`}
          description={`Are you sure you want to delete this #${row.id} invoice?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];

function getStatusBadge(status: string) {
  switch (status.toLocaleLowerCase()) {
    case "okela":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <div className="ms-2 font-medium text-orange-dark">{status}</div>
        </div>
      );
    case "paid":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <div className="ms-2 font-medium text-green-dark">{status}</div>
        </div>
      );
    case "overdue":
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <div className="ms-2 font-medium div-red-dark">{status}</div>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <div className="ms-2 font-medium text-gray-600">{status}</div>
        </div>
      );
  }
}

interface DateCellProps {
  date: Date;
  className?: string;
  dateFormat?: string;
  dateClassName?: string;
  timeFormat?: string;
  timeClassName?: string;
}

export function DateCell({
  date,
  className,
  timeClassName,
  dateClassName,
  dateFormat = "MMMM D, YYYY",
  timeFormat = "h:mm A",
}: DateCellProps) {
  return (
    <div className={cn(className, "grid gap-1")}>
      <time
        dateTime={formatDate(date, "YYYY-MM-DD")}
        className={cn("font-medium text-gray-700", dateClassName)}
      >
        {formatDate(date, dateFormat)}
      </time>
      <time
        dateTime={formatDate(date, "HH:mm:ss")}
        className={cn("text-[13px] text-gray-500", timeClassName)}
      >
        {formatDate(date, timeFormat)}
      </time>
    </div>
  );
}

interface AvatarCardProps {
  src: string;
  name: string;
  className?: string;
  description?: string;
  avatarProps?: AvatarProps;
}

export function AvatarCard({
  src,
  name,
  className,
  description,
  avatarProps,
}: AvatarCardProps) {
  return (
    <figure className={cn("flex items-center gap-3", className)}>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>

      {/* <Avatar name={name} src={src} {...avatarProps} /> */}
      <figcaption className="grid gap-0.5">
        <div className="font-lexend text-sm font-medium text-gray-900 dark:text-gray-700">
          {name}
        </div>
        {description && (
          <div className="text-[13px] text-gray-500">{description}</div>
        )}
      </figcaption>
    </figure>
  );
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  openModal: any;
};

export function EyeIcon({
  strokeWidth,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function PencilIcon({
  strokeWidth,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
}
