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
} from "recharts";
import { cn } from "rizzui";
import { CustomTooltip } from "./Line";
import { useState } from "react";
import DatePicker from "@/components/ui/datepicker";

const data = [
  {
    month: "Jan",
    newUser: 5000,
    user: 1600,
    sessions: 4000,
  },
  {
    month: "Feb",
    newUser: 8500,
    user: 2000,
    sessions: 5798,
  },
  {
    month: "Mar",
    newUser: 7000,
    user: 3000,
    sessions: 8300,
  },
  {
    month: "Apr",
    newUser: 5780,
    user: 3908,
    sessions: 6798,
  },
  {
    month: "May",
    newUser: 4890,
    user: 2500,
    sessions: 5000,
  },
  {
    month: "Jun",
    newUser: 8000,
    user: 3200,
    sessions: 7800,
  },
  {
    month: "Jul",
    newUser: 4890,
    user: 2500,
    sessions: 8500,
  },
  {
    month: "Aug",
    newUser: 3780,
    user: 3908,
    sessions: 9908,
  },
  {
    month: "Sep",
    newUser: 7800,
    user: 2800,
    sessions: 8500,
  },
  {
    month: "Oct",
    newUser: 5780,
    user: 1908,
    sessions: 7208,
  },
  {
    month: "Nov",
    newUser: 4780,
    user: 1908,
    sessions: 4908,
  },
  {
    month: "Dec",
    newUser: 7500,
    user: 3000,
    sessions: 9000,
  },
];

const filterOptions = ["Week", "Month", "Year"];

export default function UserMetrics({ className }: { className?: string }) {
  const isMediumScreen = useMedia("(max-width: 1200px)", false);
  const isTablet = useMedia("(max-width: 800px)", false);
  function handleFilterBy(data: string) {
    console.log("Audience Metrics Filter:", data);
  }

  return (
    <WidgetCard
      title={" Statistics Table of Audience "}
      description={
        <>
          <Badge className=" my-2 mx-2 bg-[#5a5fd7]" /> Users
        </>
      }
      descriptionClassName="text-white mt-1.5 mb-3 @lg:mb-0"
      action={<DatePickerYear />}
      headerClassName="flex-col @lg:flex-row"
      rounded="lg"
      className={className}
    >
      <div className={cn("h-[420px] w-full pt-9 @7xl:h-[480px]")}>
        <ResponsiveContainer
          width="100%"
          {...(isTablet && { minWidth: "700px" })}
          height="100%"
        >
          <ComposedChart
            data={data}
            barSize={isMediumScreen ? 20 : 28}
            className="[&_.recharts-cartesian-axis-tick-value]:fill-white  [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
          >
            <defs>
              <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#F0F1FF"
                  className=" [stop-opacity:0.2]"
                />
                <stop offset="95%" stopColor="#8200E9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
            />
            <Tooltip content={<CustomTooltip className="border-0" />} />
            <Bar
              dataKey="user"
              fill="#5a5fd7"
              {...(isTablet
                ? { stackId: "userMetrics" }
                : { shape: <RoundedTopBarFill /> })}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
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

export function DatePickerYear() {
  const [startDate, setStartDate] = useState<Date>();
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
}
