import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ color, bgColor }) => {
  const data = [
    {
      name: "january",
      amt: 2400,
    },
    {
      name: "february",
      amt: 2210,
    },
    {
      name: "March",
      amt: 2290,
    },
    {
      name: "April",
      amt: 2000,
    },
    {
      name: "May",
      amt: 2181,
    },
    {
      name: "June",
      amt: 2500,
    },
    {
      name: "July",
      amt: 2100,
    },
    {
      name: "August",
      amt: 2100,
    },
    {
      name: "September",
      amt: 2100,
    },
    {
      name: "October",
      amt: 2100,
    },
    {
      name: "Novermber",
      uv: 3490,
      amt: 2100,
    },
    {
      name: "December",
      amt: 2100,
    },
  ];


  return (
    <div className="w-full h-full">
      <ResponsiveContainer className="text-[10px] h-full w-full">
        <AreaChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke={color} fill={bgColor} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
