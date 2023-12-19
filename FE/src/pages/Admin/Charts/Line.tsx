import React, { useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
import { useMedia } from "react-use";
import WidgetCard from "@/components/ui/widgetCard";

// const data = [
//   {
//     month: "Jan",
//     creationTime: 4,
//     responseTime: 5,
//   },
//   {
//     month: "Feb",
//     creationTime: 2,
//     responseTime: 3,
//   },
//   {
//     month: "Mar",
//     creationTime: 3,
//     responseTime: 2,
//   },
//   {
//     month: "Apr",
//     creationTime: 4,
//     responseTime: 3,
//   },
//   {
//     month: "May",
//     creationTime: 4,
//     responseTime: 3,
//   },
//   {
//     month: "Jun",
//     creationTime: 6,
//     responseTime: 5,
//   },
//   {
//     month: "Jul",
//     creationTime: 3,
//     responseTime: 2,
//   },
//   {
//     month: "Aug",
//     creationTime: 4,
//     responseTime: 3,
//   },
//   {
//     month: "Sep",
//     creationTime: 5,
//     responseTime: 4,
//   },
//   {
//     month: "Oct",
//     creationTime: 5,
//     responseTime: 4,
//   },
//   {
//     month: "Nov",
//     creationTime: 6,
//     responseTime: 5,
//   },
//   {
//     month: "Dec",
//     creationTime: 7,
//     responseTime: 6,
//   },
// ];
// const dataMonth = [
//   { date: "2023-11-01", creationTime: 4, responseTime: 5 },
//   { date: "2023-11-02", creationTime: 4, responseTime: 5 },
//   { date: "2023-11-30", creationTime: 4, responseTime: 5 },
// ];

const filterOptions = ["Month", "Year"];

export default function ResponseRate({ className }: { className?: string }) {
    const isTablet = useMedia("(max-width: 820px)", false);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [option, setOption] = useState("");

    const dataMonth = useSelector(
        (state: RootState) => state.admin.blogChartByMonth
    );
    const dataYear = useSelector(
        (state: RootState) => state.admin.blogChartByYear
    );

    const convertDataChart = (data: any) => {
        const dataMonth = [];
        for (const [date, creationTime] of Object.entries(data)) {
            dataMonth.push({ date, creationTime });
        }
        return dataMonth;
    };

    const { isLoading, sendRequest } = useFetch();

    console.log(convertDataChart(dataYear));

    useEffect(() => {
        if (startDate.getMonth())
            sendRequest({
                type: REQUEST_TYPE.ADMIN_CHART_BLOG_MONTH,
                slug: startDate.getMonth().toString(),
            });
        if (startDate.getFullYear())
            sendRequest({
                type: REQUEST_TYPE.ADMIN_CHART_BLOG_YEAR,
                slug: startDate.getFullYear().toString(),
            });
    }, [startDate, option]);

    function handleFilterBy(data: string) {
        setOption(data);
    }

    return (
        <WidgetCard
            title="Statistics Table of Blogs"
            className={className}
            description={
                <>
                    <span className="flex items-center gap-1">
                        <span className="inline-flex justify-end h-3 w-3 rounded-[2px] bg-[#10b981]" />
                        Number Blog
                    </span>
                </>
            }
            descriptionClassName="text-gray-500 mt-1.5 flex flex-col md:flex-row items-center gap-2"
            action={
                <ButtonGroupAction
                    options={filterOptions}
                    onChange={(data) => handleFilterBy(data)}
                    setStartDate={setStartDate}
                    startDate={startDate}
                />
            }
        >
            <div className="h-[25.5rem] w-full py-9">
                {isLoading ? (
                    <div role="status" className="w-full flex justify-center">
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <ResponsiveContainer
                        className={"h-full w-full"}
                        {...(isTablet && { minWidth: "700px" })}
                    >
                        <AreaChart
                            data={
                                option === "Month"
                                    ? convertDataChart(dataMonth)
                                    : convertDataChart(dataYear)
                            }
                            height={700}
                            margin={{
                                left: -2,
                                right: 2,
                                bottom: 0,
                            }}
                            className="[&_.recharts-cartesian-axis-tick-value]:fill-white  rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0 "
                        >
                            <defs>
                                <linearGradient
                                    id="newCustomer"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#ffdadf"
                                        stopOpacity={0.1}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#10b981"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="oldCustomer"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#dbeafe"
                                        stopOpacity={0.1}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#3872FA"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid
                                strokeDasharray="8 10"
                                strokeOpacity={0.435}
                            />
                            {option === "Month" && (
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                />
                            )}
                            {option === "Year" && (
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={10}
                                />
                            )}

                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="basis"
                                dataKey="creationTime"
                                stroke="#10b981"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#newCustomer)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </WidgetCard>
    );
}

export function addSpacesToCamelCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

import cn from "@/lib/class-names";
import { AdvancedRadio } from "rizzui";

import DatePicker from "@/components/ui/datepicker";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

function isValidHexColor(colorCode: string) {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(colorCode);
}

export function CustomTooltip({ active, payload, label, className }: any) {
    if (!active) return null;

    return (
        <div
            className={cn(
                "overflow-hidden rounded-md border border-gray-300 bg-gray-0 shadow-2xl bg-gray-100",
                className
            )}
        >
            <div className="label mb-0.5 block bg-gray-100 p-2 px-2.5 text-center font-lexend text-xs font-semibold capitalize text-gray-600 bg-gray-200/60 ">
                {label}
            </div>
            <div className="px-3 py-1.5 text-xs">
                {payload.map((item: any, index: number) => (
                    <div
                        key={item.dataKey + index}
                        className="chart-tooltip-item flex items-center py-1.5"
                    >
                        <span
                            className="me-1.5 h-2 w-2 rounded-full"
                            style={{
                                backgroundColor: isValidHexColor(item.fill)
                                    ? item.fill === "#0000"
                                        ? item.stroke
                                        : item.fill
                                    : item.stroke,
                            }}
                        />
                        <div>
                            <span className="capitalize">
                                {addSpacesToCamelCase(item.dataKey)}:
                            </span>{" "}
                            <span className="font-medium text-gray-700">
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

type ButtonGroupActionProps = {
    name?: string;
    options: string[];
    defaultActive?: string;
    onChange: (data: string) => void;
    className?: string;
    btnClassName?: string;
    activeClassName?: string;
    startDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date>>;
};
export function ButtonGroupAction({
    name = "filter",
    options,
    onChange,
    className,
    btnClassName,
    defaultActive,
    activeClassName,
    startDate,
    setStartDate,
}: ButtonGroupActionProps) {
    const [state, setState] = useState(
        defaultActive ? defaultActive : options[options.length - 1]
    );
    function handleOnChange(value: string) {
        setState(() => value);
        onChange && onChange(value);
    }

    return (
        <div className="flex flex-col">
            <div className={cn("flex justify-end ", className)}>
                {options.map((item) => (
                    <AdvancedRadio
                        key={`filter-${item}`}
                        name={name}
                        value={item}
                        onChange={(e) => handleOnChange(e.target.value)}
                        className={cn(
                            "rounded-md px-3 w-fit py-1.5 transition-all duration-200 hover:cursor-pointer",
                            state === item
                                ? "bg-gray-100 text-gray-700"
                                : "text-gray-600",
                            btnClassName,
                            state === item && activeClassName
                        )}
                    >
                        {item}
                    </AdvancedRadio>
                ))}
            </div>
            <div className="mb-16">
                {state === "Year" && (
                    // Render the date picker here when 'week' is selected
                    <DatePickerYear
                        setStartDate={setStartDate as any}
                        startDate={startDate}
                    />
                )}
                {state === "Month" && (
                    // Render the date picker here when 'week' is selected
                    <DatePickerMonth
                        setStartDate={setStartDate as any}
                        startDate={startDate}
                    />
                )}
            </div>
        </div>
    );
}

interface DatePickerYear {
    startDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const DatePickerYear: React.FC<DatePickerYear> = ({
    setStartDate,
    startDate,
}) => {
    return (
        <div className="relative top-14 text-white px-4">
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="yyyy"
                placeholderText="Select Year"
                showYearPicker
            />
        </div>
    );
};

interface DatePickerMonth {
    startDate: Date;
    setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const DatePickerMonth: React.FC<DatePickerMonth> = ({
    startDate,
    setStartDate,
}) => {
    return (
        <div className="relative top-14 text-white px-4 ">
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MMMM"
                placeholderText="Select Month"
                showMonthYearPicker
            />
        </div>
    );
};
