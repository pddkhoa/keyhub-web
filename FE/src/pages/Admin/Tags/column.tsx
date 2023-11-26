import { EditUser } from "@/components/Form/editUser";
import DeletePopover from "@/components/Popover/delete";
import { HeaderCell } from "@/components/Table/Table";
import { formatDate } from "@/lib/formate-date";
import { Tooltip, ActionIcon, cn } from "rizzui";

export const getColumnsTags = ({
  data,
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
  openModal,
}: Columns) => [
  {
    title: <HeaderCell title="#" />,
    dataIndex: "id",
    key: "id",
    width: 50,

    render: (id: number) => id,
  },
  {
    title: <HeaderCell title="Tags" />,
    dataIndex: "name",
    key: "name",
    width: 200,

    render: (name: string) => <div>#{name}</div>,
  },

  {
    title: <HeaderCell align="center" title="Action" />,
    dataIndex: "action",
    key: "action",
    width: 200,
    render: (_: string, row: any) => (
      <div className="flex items-center justify-center gap-3 ">
        <Tooltip
          size="sm"
          content={() => "Edit Invoice"}
          placement="top"
          className="bg-gray-200 [&>svg]:fill-gray-100 "
          color="invert"
        >
          <ActionIcon
            onClick={() => {
              openModal({
                view: <EditUser />,
                customSize: "480px",
              }),
                console.log(data),
                console.log("open");
            }}
            tag="span"
            size="sm"
            variant="outline"
            className="hover:brightness-150 cursor-pointer"
          >
            <PencilIcon />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          size="sm"
          content={() => "View Invoice"}
          placement="top"
          className="bg-gray-200 [&>svg]:fill-gray-100 "
          color="invert"
        >
          <ActionIcon
            onClick={() => {
              console.log(data);
            }}
            tag="span"
            size="sm"
            variant="outline"
            className="hover:brightness-150 cursor-pointer"
          >
            <EyeIcon className="h-4 w-4" />
          </ActionIcon>
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
        className={cn("font-medium text-white", dateClassName)}
      >
        {formatDate(date, dateFormat)}
      </time>
      <time
        dateTime={formatDate(date, "HH:mm:ss")}
        className={cn("text-[13px] text-gray-400", timeClassName)}
      >
        {formatDate(date, timeFormat)}
      </time>
    </div>
  );
}

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll?: any;
  checkedItems?: string[];
  onDeleteItem?: (id: string) => void;
  onHeaderCellClick?: (value: string) => void;
  onChecked?: (id: string) => void;
  openModal?: any;
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
