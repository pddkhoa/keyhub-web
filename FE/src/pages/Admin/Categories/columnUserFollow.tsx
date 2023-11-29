import { HeaderCell } from "@/components/Table/Table";
import { formatDate } from "@/lib/formate-date";
import { useNavigate } from "react-router-dom";
import { Tooltip, ActionIcon, cn, AvatarProps, Avatar } from "rizzui";

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (report: any) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
  openModal: any;
  index?: number;
};

export const getColumnsUsersFollowCate = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
  openModal,
  index,
}: Columns) => [
  {
    title: <HeaderCell title="#" />,
    dataIndex: "id",
    key: "id",
    width: 50,

    render: (id: number) => id,
  },

  {
    title: <HeaderCell title="Author" />,
    dataIndex: "users",
    key: "users",
    width: 150,
    render: (_: string, row: any) => (
      <>
        <AvatarCard
          src={row.avatar}
          name={row.name}
          description={`@-${row.username}`}
        />
      </>
    ),
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: "email",
    key: "email",
    width: 100,

    render: (email: any) => email,
  },

  {
    title: <HeaderCell title="Phone" />,
    dataIndex: "phone",
    key: "phone",
    width: 100,

    render: (phone: any) => phone,
  },

  {
    title: (
      <HeaderCell
        title="Created"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "createDate"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("createDate"),
    dataIndex: "createDate",
    key: "createDate",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
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
          content={() => "View Invoice"}
          placement="top"
          className="bg-gray-200 [&>svg]:fill-gray-100 "
          color="invert"
        >
          <ActionIcon
            tag="span"
            size="sm"
            variant="outline"
            className="hover:brightness-150 cursor-pointer"
          >
            <EyeIcon
              className="h-4 w-4"
              data={row}
              index={index}
              // onClick={() => {
              //   console.log(index);
              // }}
            />
          </ActionIcon>
        </Tooltip>
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
      <figcaption className=" gap-5 items-center  flex">
        <Avatar name={name} src={src} {...avatarProps} />
        <div className="flex flex-col mt-1">
          <div className="font-lexend text-sm font-medium text-white">
            {name}
          </div>
          <div className="text-sm  text-gray-400">{description}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function EyeIcon({
  strokeWidth,
  onClick,
  data,
  index,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  onClick?: () => void;
  data?: any;
  index?: number;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Navigate to the desired page when the icon is clicked
      navigate(`/admin/users/${data.id}`, {
        state: { rowData: data, indexPage: index },
      });
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.5}
      stroke="currentColor"
      onClick={handleClick}
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
