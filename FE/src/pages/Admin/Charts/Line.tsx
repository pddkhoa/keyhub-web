import { useState } from "react";
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

const data = [
  {
    month: "Jan",
    creationTime: 4,
    responseTime: 5,
  },
  {
    month: "Feb",
    creationTime: 2,
    responseTime: 3,
  },
  {
    month: "Mar",
    creationTime: 3,
    responseTime: 2,
  },
  {
    month: "Apr",
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: "May",
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: "Jun",
    creationTime: 6,
    responseTime: 5,
  },
  {
    month: "Jul",
    creationTime: 3,
    responseTime: 2,
  },
  {
    month: "Aug",
    creationTime: 4,
    responseTime: 3,
  },
  {
    month: "Sep",
    creationTime: 5,
    responseTime: 4,
  },
  {
    month: "Oct",
    creationTime: 5,
    responseTime: 4,
  },
  {
    month: "Nov",
    creationTime: 6,
    responseTime: 5,
  },
  {
    month: "Dec",
    creationTime: 7,
    responseTime: 6,
  },
];

const filterOptions = ["Week", "Month", "Year"];

export default function ResponseRate({ className }: { className?: string }) {
  const isTablet = useMedia("(max-width: 820px)", false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <WidgetCard
      title="Statistics Table of Blogs"
      className={className}
      description={
        <>
          <span className="flex items-center gap-1">
            <span className="inline-flex h-3 w-3 rounded-[2px] bg-[#10b981]" />
            Number Blog
          </span>
        </>
      }
      descriptionClassName="text-gray-500 mt-1.5 flex flex-col md:flex-row items-center gap-2"
      action={
        <ButtonGroupAction
          options={filterOptions}
          onChange={(data) => handleFilterBy(data)}
          className="-ms-2 mb-3 @lg:mb-0 @lg:ms-0"
        />
      }
    >
      <div className="h-[25.5rem] w-full py-9">
        <ResponsiveContainer
          className={"h-full w-full"}
          {...(isTablet && { minWidth: "700px" })}
        >
          <AreaChart
            data={data}
            height={700}
            margin={{
              left: -2,
              right: 2,
              bottom: 10,
            }}
            className="[&_.recharts-cartesian-axis-tick-value]:fill-white  rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12 [&_.recharts-cartesian-grid-vertical]:opacity-0 "
          >
            <defs>
              <linearGradient id="newCustomer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffdadf" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="oldCustomer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dbeafe" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#3872FA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="8 10" strokeOpacity={0.435} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={20} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="natural"
              dataKey="responseTime"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#newCustomer)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}

export function addSpacesToCamelCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

import cn from "@/lib/class-names";
import { AdvancedRadio } from "rizzui";

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
              <span className="font-medium text-gray-700">{item.value}</span>
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
};
export function ButtonGroupAction({
  name = "filter",
  options,
  onChange,
  className,
  btnClassName,
  defaultActive,
  activeClassName,
}: ButtonGroupActionProps) {
  const [state, setState] = useState(
    defaultActive ? defaultActive : options[options.length - 1]
  );
  function handleOnChange(value: string) {
    setState(() => value);
    onChange && onChange(value);
  }

  return (
    <div className={cn("flex items-center gap-1 font-medium", className)}>
      {options.map((item) => (
        <AdvancedRadio
          key={`filter-${item}`}
          name={name}
          value={item}
          onChange={(e) => handleOnChange(e.target.value)}
          className={cn(
            "rounded-md px-3 py-1.5 transition-all duration-200 hover:cursor-pointer",
            state === item ? "bg-gray-100 text-gray-700" : "text-gray-600",
            btnClassName,
            state === item && activeClassName
          )}
        >
          {item}
        </AdvancedRadio>
      ))}
    </div>
  );
}
