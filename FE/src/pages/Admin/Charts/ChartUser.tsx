import WidgetCard from "@/components/ui/widgetCard";
import { Badge } from "lucide-react";
import { useMedia } from "react-use";
import {
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ComposedChart,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { cn } from "rizzui";
import { CustomTooltip } from "./Line";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function UserMetrics({ className }: { className?: string }) {
    const isMediumScreen = useMedia("(max-width: 1200px)", false);
    const isTablet = useMedia("(max-width: 800px)", false);

    const { isLoading, sendRequest } = useFetch();

    const dataChart = useSelector(
        (state: RootState) => state.admin.userChartByYear
    );

    const convertDataChart = (dataIn: any) => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const dataOut = [];
        for (const [date, creationTime] of Object.entries(dataIn)) {
            dataOut.push({
                date: monthNames[parseInt(date.split("-")[1], 10) - 1],
                creationTime,
            });
        }
        return dataOut;
    };

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.ADMIN_CHART_USER_YEAR });
    }, []);

    return (
        <WidgetCard
            title={" Statistics Table of Audience "}
            description={
                <>
                    <Badge className=" my-2 mx-2 bg-[#5a5fd7]" /> Users
                </>
            }
            descriptionClassName="text-white mt-1.5 mb-3 @lg:mb-0"
            headerClassName="flex-col @lg:flex-row"
            rounded="lg"
            className={className}
        >
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
                <div className={cn("h-[420px] w-full pt-9 @7xl:h-[480px]")}>
                    <ResponsiveContainer
                        width="100%"
                        {...(isTablet && { minWidth: "700px" })}
                        height="100%"
                    >
                        <ComposedChart
                            data={dataChart && convertDataChart(dataChart)}
                            barSize={isMediumScreen ? 20 : 28}
                            className="[&_.recharts-cartesian-axis-tick-value]:fill-white  [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
                        >
                            <defs>
                                <linearGradient
                                    id="analyticsArea"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#F0F1FF"
                                        className=" [stop-opacity:0.2]"
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#8200E9"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid
                                strokeDasharray="2 3"
                                strokeOpacity={0.335}
                            />

                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={<CustomYAxisTick />}
                            />
                            <Tooltip
                                content={<CustomTooltip className="border-0" />}
                            />
                            <Bar
                                dataKey="creationTime"
                                fill="#5a5fd7"
                                {...(isTablet
                                    ? { stackId: "userMetrics" }
                                    : { shape: <RoundedTopBarFill /> })}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            )}
        </WidgetCard>
    );
}

export function CustomYAxisTick({ x, y, payload, prefix }: any) {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" className="fill-white">
                {prefix && prefix}
                {payload.value.toLocaleString()}
            </text>
        </g>
    );
}

export function RoundedTopBar({
    x,
    y,
    width,
    height,
    fillOpacity,
    className,
    cornerRadius = 6,
}: any) {
    const roundedHeight = Math.max(cornerRadius, height);
    const path = `
      M${x},${y + roundedHeight}
      L${x},${y + cornerRadius}
      Q${x},${y} ${x + cornerRadius},${y}
      L${x + width - cornerRadius},${y}
      Q${x + width},${y} ${x + width},${y + cornerRadius}
      L${x + width},${y + roundedHeight}
      Z
    `;
    return (
        <path
            d={path}
            fillOpacity={fillOpacity}
            className={cn("fill-[#d4dcfa] dark:fill-[#7c88b2]", className)}
        />
    );
}

export function RoundedTopBarFill({
    x,
    y,
    width,
    height,
    fillOpacity,
    fill,
    stroke,
    strokeWidth,
    cornerRadius = 6,
    className,
}: any) {
    const roundedHeight = Math.max(cornerRadius, height);
    const path = `
      M${x},${y + roundedHeight}
      L${x},${y + cornerRadius}
      Q${x},${y} ${x + cornerRadius},${y}
      L${x + width - cornerRadius},${y}
      Q${x + width},${y} ${x + width},${y + cornerRadius}
      L${x + width},${y + roundedHeight}
      Z
    `;
    return (
        <path
            d={path}
            fill={fill}
            fillOpacity={fillOpacity}
            {...(stroke && { stroke })}
            {...(strokeWidth && { strokeWidth })}
            className={cn(className)}
        />
    );
}
