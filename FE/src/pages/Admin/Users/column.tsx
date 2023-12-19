import DeletePopover from "@/components/Popover/delete";
import { HeaderCell } from "@/components/Table/Table";
import { formatDate } from "@/lib/formate-date";
import { useNavigate } from "react-router-dom";
import { Tooltip, ActionIcon, cn, AvatarProps, Avatar, Badge } from "rizzui";

type Columns = {
    data?: any[];
    sortConfig?: any;
    onDeleteItem?: (report: any) => void;
    onHeaderCellClick: (value: string) => void;
    onDeleteUser?: (report: any) => void;
    index?: number;
    onDeleteBlog?: (report: any) => void;
    onDeleteCategories?: (id: any) => Promise<void>;
    onDeleteItemTag?: (id: any) => void;
    setDisplayModal?: React.Dispatch<React.SetStateAction<any>>;
    setDisplayCreate?: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    setDataUserReport?: any;
    setTag?: any;
    setDataBlog?: any;
    setDataUserBlock?: any;
    setCommentEvalute?: any;
};

export const getColumnsUsers = ({
    sortConfig,
    onHeaderCellClick,
    onDeleteUser,
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
        title: <HeaderCell title="Role" />,
        dataIndex: "role",
        key: "role",
        width: 100,

        render: (role: any) => getStatusBadge(role),
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
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "createDate"
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
                {onDeleteUser && (
                    <DeletePopover
                        title={`Delete the invoice`}
                        description={`Are you sure you want to delete this #${row.id} invoice?`}
                        onDelete={() =>
                            onDeleteUser({ user_id: row.id, value: 1 })
                        }
                    />
                )}
            </div>
        ),
    },
];

function getStatusBadge(status: string) {
    switch (status) {
        case "ADMIN":
            return (
                <div className="flex items-center">
                    <Badge className="bg-yellow-400" renderAsDot />
                    <div className="ms-2 font-medium text-yellow-400">
                        {status}
                    </div>
                </div>
            );
        case "USER":
            return (
                <div className="flex items-center">
                    <Badge className="bg-purple-600" renderAsDot />
                    <div className="ms-2 font-medium text-purple-600">
                        {status}
                    </div>
                </div>
            );

        default:
            return (
                <div className="flex items-center">
                    <Badge renderAsDot className="bg-gray-400" />
                    <div className="ms-2 font-medium text-gray-600">
                        {status}
                    </div>
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
            navigate(`${data.id}`, {
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
