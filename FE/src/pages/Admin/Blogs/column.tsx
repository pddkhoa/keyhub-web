import DeletePopover from "@/components/Popover/delete";
import { HeaderCell } from "@/components/Table/Table";
import { formatDate } from "@/lib/formate-date";
import User from "@/types/user";
import { useNavigate } from "react-router-dom";
import { Tooltip, ActionIcon, cn, AvatarProps, Avatar } from "rizzui";

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

export const getColumnsBlogs = ({
    sortConfig,
    onHeaderCellClick,
    onDeleteBlog,
}: Columns) => [
    {
        title: <HeaderCell title="#" />,
        dataIndex: "id",
        key: "id",
        width: 50,

        render: (id: number) => id,
    },
    {
        title: <HeaderCell title="Blogs" />,
        dataIndex: "title",
        key: "title",
        width: 250,

        render: (title: string) => title,
    },
    {
        title: <HeaderCell title="Author" />,
        dataIndex: "users",
        key: "users",
        width: 150,
        render: (users: User) => (
            <AvatarCard
                src={users?.avatar?.toString()}
                name={users?.name}
                description={`HPT-${users?.second_name}`}
            />
        ),
    },
    {
        title: <HeaderCell title="Categories" />,
        dataIndex: "categories",
        key: "categories",
        width: 100,

        render: (categories: any) => categories?.name,
    },

    {
        title: (
            <HeaderCell
                title="Created"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "create_date"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("create_date"),
        dataIndex: "create_date",
        key: "create_date",
        width: 100,
        render: (value: Date) => <DateCell date={value} />,
    },

    {
        title: <HeaderCell align="center" title="Action" />,
        dataIndex: "action",
        key: "action",
        width: 140,
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
                        tag="span"
                        size="sm"
                        variant="outline"
                        className="hover:brightness-150 cursor-pointer"
                    >
                        <PencilIcon data={row} />
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
                        onClick={() => {}}
                        tag="span"
                        size="sm"
                        variant="outline"
                        className="hover:brightness-150 cursor-pointer"
                    >
                        <EyeIcon data={row} className="h-4 w-4" />
                    </ActionIcon>
                </Tooltip>
                {onDeleteBlog && (
                    <DeletePopover
                        title={`Delete the invoice`}
                        description={`Are you sure you want to delete this #${row.id} invoice?`}
                        onDelete={() => onDeleteBlog(row.id.toString())}
                    />
                )}
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
    src?: string;
    name: string;
    className?: string;
    description?: string;
    avatarProps?: AvatarProps;
}

export function AvatarCard({
    src,
    name,
    className,
    avatarProps,
}: AvatarCardProps) {
    return (
        <figure className={cn("flex items-center gap-3", className)}>
            <figcaption className=" gap-5 items-center  flex">
                <Avatar name={name} src={src} {...avatarProps} />
                <div className="font-lexend text-sm font-medium text-white">
                    {name}
                </div>
            </figcaption>
        </figure>
    );
}

export function EyeIcon({
    strokeWidth,
    onClick,
    data,
    ...props
}: React.SVGProps<SVGSVGElement> & {
    onClick?: () => void;
    data?: any;
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            navigate(`${data.id}`);
        }
    };
    return (
        <svg
            onClick={handleClick}
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
    onClick,
    data,
    ...props
}: React.SVGProps<SVGSVGElement> & {
    onClick?: () => void;
    data?: any;
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            navigate(`/admin/editor/${data.id}`, { state: data });
        }
    };
    return (
        <svg
            onClick={handleClick}
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
