import { HeaderCell } from "@/components/Table/Table";
import { formatDate } from "@/lib/formate-date";
import User from "@/types/user";
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

export const getColumnsUserReport = ({
    sortConfig,
    setDisplayModal,
    setDisplayCreate,
    onHeaderCellClick,
    setDataUserReport,
}: Columns) => [
    {
        title: <HeaderCell title="#" />,
        dataIndex: "id",
        key: "id",
        width: 50,

        render: (id: number) => id,
    },

    {
        title: <HeaderCell title="Account Report" />,
        dataIndex: "user_report",
        key: "user_report",
        width: 150,
        render: (users: User) => (
            <AvatarCard
                src={users?.avatar?.toString()}
                name={users?.name}
                description={`@-${users?.second_name}`}
            />
        ),
    },
    {
        title: <HeaderCell title="Account is Report" />,
        dataIndex: "user_is_reported",
        key: "user_is_reported",
        width: 150,
        render: (users: User) => (
            <AvatarCard
                src={users?.avatar?.toString()}
                name={users?.name}
                description={`@-${users?.second_name}`}
            />
        ),
    },
    {
        title: <HeaderCell title="Reason" />,
        dataIndex: "reason",
        key: "reason",
        width: 250,

        render: (reason: any) => reason,
    },

    {
        title: (
            <HeaderCell
                title="Created"
                sortable
                ascending={
                    sortConfig?.direction === "asc" &&
                    sortConfig?.key === "create_at"
                }
            />
        ),
        onHeaderCell: () => onHeaderCellClick("create_at"),
        dataIndex: "create_at",
        key: "create_at",
        width: 100,
        render: (value: Date) => <DateCell date={value} />,
    },

    {
        title: <HeaderCell align="center" title="Action" />,
        dataIndex: "action",
        key: "action",
        width: 200,
        render: (_: string, row: any) => (
            <div className="flex items-center justify-center gap-3">
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
                        {setDisplayCreate && setDisplayModal && (
                            <PencilIcon
                                onClick={() => {
                                    setDisplayCreate.on();
                                    setDisplayModal("USER_REPORT");
                                    setDataUserReport(row);
                                }}
                            />
                        )}
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
