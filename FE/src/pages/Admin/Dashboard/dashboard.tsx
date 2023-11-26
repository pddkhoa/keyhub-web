import { FolderIcon } from "@/components/ui/icon";
import {
  PiCopySimple,
  PiDotsThreeOutlineVerticalFill,
  PiShareFat,
  PiTrashSimple,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { ActionIcon, Button, Popover, Title, cn } from "rizzui";
import SimpleBar from "simplebar-react";
import CustomerType from "../Charts/Donut";
import ResponseRate from "../Charts/Line";
import UserMetrics from "../Charts/ChartUser";

const Dashboard = () => {
  return (
    <div className="container py-16 ml-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="flex gap-4 p-6  shadow-2xl rounded-lg bg-gray-900 text-white">
            <div className="grid grid-cols-8">
              <div className="col-span-6 flex flex-col">
                <div className="p-2 text-2xl text-blue-600">
                  Congratulations John! 🎉
                </div>
                <div className="p-2 text-xl text-gray-400">
                  You have done 72% 🤩 more sales today. Check your new raising
                  badge in your profile.
                </div>
              </div>
              <div className="col-span-2">
                <img src="https://sneat-vuetify-admin-template.vercel.app/assets/illustration-john-light-0061869a.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4"></div>
      </div>
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        {/* <div className="col-span-full flex flex-col gap-6 @5xl:col-span-8 2xl:gap-8 3xl:col-span-9">
          <RecentFiles />
        </div> */}

        <CustomerType className="col-span-full @4xl:col-span-6 @6xl:col-span-5" />
        <ResponseRate className="col-span-full @4xl:col-span-6 @6xl:col-span-7" />
        <UserMetrics className="@4xl:col-span-2 @7xl:col-span-12" />

        {/* <TopTrafficSource /> */}
        {/* <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />
          <Members />
          <UpgradeStorage />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

const recentFiles = [
  {
    id: 1,
    file: {
      name: "Employee Sheets",
      image: <FolderIcon />,
    },
    size: "2.4 GB",
    totalFiles: "135",
  },
  {
    id: 2,
    file: {
      name: "Personal Assets",
      image: <FolderIcon />,
    },
    size: "1.8 GB",
    totalFiles: "40",
  },
  {
    id: 3,
    file: {
      name: "Data & Prints",
      image: <FolderIcon />,
    },
    size: "528 MB",
    totalFiles: "122",
  },
  {
    id: 4,
    file: {
      name: "Raw Images",
      image: <FolderIcon />,
    },
    size: "8 GB",
    totalFiles: "900",
  },
];

export function RecentFiles({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="col-span-full mb-3 flex items-center justify-between 2xl:mb-5">
        <Title as="h3" className="text-lg font-semibold xl:text-xl">
          Recent Files
        </Title>
        <Link
          to={"#"}
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          View all
        </Link>
      </div>

      <SimpleBar>
        <div className="grid grid-flow-col gap-5">
          {recentFiles.map((item) => {
            return (
              <Card
                key={item.id}
                className="min-w-[273px] hover:-translate-y-0 hover:shadow-none"
                item={item}
                onDeleteItem={() => null}
              />
            );
          })}
        </div>
      </SimpleBar>
    </div>
  );
}

export function Card({
  item,
  onDeleteItem,
  className,
}: {
  item: any;
  onDeleteItem: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-gray-200 bg-gray-0 p-5 shadow-sm transition-all hover:z-50 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-50",
        className
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
        <figure className="h-7 w-7">{item.file.image}</figure>
      </div>
      <Title
        as="h4"
        className="mb-1 truncate text-sm font-medium text-gray-800"
      >
        {item?.file?.name}
      </Title>
      <ul className="flex list-inside list-disc gap-3.5">
        <li className="list-none text-sm text-gray-500">{item?.size}</li>
        <li className="text-sm text-gray-500">{item?.totalFiles} files</li>
      </ul>
      <div className="absolute top-3 flex ltr:right-2 rtl:left-2">
        <Popover
          placement="left"
          className="z-[99] min-w-[140px] px-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100"
          content={({ setOpen }) => (
            <div className="px-2 text-gray-900">
              <Button
                variant="text"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-start px-2 py-2.5 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
              >
                <PiCopySimple className="mr-2 h-5 w-5 text-gray-500" />
                Copy
              </Button>
              <Button
                variant="text"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-start px-2 py-2.5 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
              >
                <PiShareFat className="mr-2 h-5 w-5 text-gray-500" />
                Share
              </Button>
              <Button
                variant="text"
                className="flex w-full items-center justify-start px-2 py-2.5 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50"
                onClick={() => {
                  onDeleteItem(item.id);
                  setOpen(false);
                }}
              >
                <PiTrashSimple className="mr-2 h-5 w-5 text-gray-500" />
                Delete
              </Button>
            </div>
          )}
        >
          <ActionIcon title={"More Options"} variant="text">
            <PiDotsThreeOutlineVerticalFill className="h-5 w-5 text-gray-500" />
          </ActionIcon>
        </Popover>
      </div>
    </div>
  );
}
