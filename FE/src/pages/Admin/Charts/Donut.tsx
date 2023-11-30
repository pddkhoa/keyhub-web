import WidgetCard from "@/components/ui/widgetCard";
import { Title } from "rizzui";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { Divide } from "lucide-react";
import { useEffect, useState } from "react";
import cn from "@/lib/class-names";
import { useElementSize } from "@/hooks/useElementSize";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// const data = [
//   { name: "Silver", value: 400 },
//   { name: "Gold", value: 300 },
// ];

// const valueSum = data.reduce((total, item) => total + item.value, 0);
// const calculatePercentage = (part: number, total: number) =>
//   ((part / total) * 100).toFixed(2);

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-lg font-medium"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Total Tickets ${value}`}</text>
    </g>
  );
};
const COLORS = ["#FA436B", "#4C2889", "#36A2EB", "#4BC0C0"];

export default function ChartTypeBlog({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartRef, { width }] = useElementSize();

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const { isLoading, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest({ type: REQUEST_TYPE.ADMIN_CHART_CIRCLE });
  }, []);

  const data = useSelector((state: RootState) => state?.admin?.dataChartCircle);

  const dataChart = [
    { name: "Draft", value: data?.Draft }, // Thay thế 0.0 bằng giá trị thực của bạn
    { name: "Published", value: data?.Published }, // Tương tự, thay thế 100.0
  ];

  return (
    <WidgetCard
      rounded="lg"
      title="Statistics Table of Blogs"
      className={cn("grid ", className)}
      headerClassName="mb-8 lg:mb-0"
      ref={chartRef}
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
        <>
          <div className=" w-full max-w-full justify-around gap-6 @sm:pt-3 @7xl:gap-8 md:h-[26rem] 3xl:h-[22rem]">
            <ResponsiveContainer
              width={width - 56}
              height="100%"
              className="mx-auto"
            >
              <PieChart
                margin={{
                  top: -30,
                }}
              >
                <Pie
                  cx="50%"
                  cy="50%"
                  dataKey="value"
                  innerRadius="40%"
                  outerRadius="70%"
                  fill="#8884d8"
                  paddingAngle={2}
                  data={dataChart}
                  onMouseEnter={onPieEnter}
                  activeIndex={activeIndex}
                  label
                >
                  {dataChart.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap text-white justify-center gap-6 @md:grid-cols-4">
            {dataChart.map((item, index) => (
              <div key={item.name} className="grid gap-2">
                <div className="flex items-center">
                  <span
                    className="me-2 h-2.5 w-3.5 flex-shrink-0"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <div className=" whitespace-nowrap">{item.name}</div>
                </div>
                {/* <div className="ms-5 font-medium">
              {calculatePercentage(item.value, valueSum)}%
            </div> */}
              </div>
            ))}
          </div>
        </>
      )}
    </WidgetCard>
  );
}
