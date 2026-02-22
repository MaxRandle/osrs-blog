"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export type DpsDataPoint = {
  x: number;
  green: number;
  blue: number;
  red: number;
};

const NUM_POINTS = 60;
const X_MIN = 0;
const X_MAX = 100;

const xTicks = [
  { value: 20, label: "Low def" },
  { value: 50, label: "Med def" },
  { value: 80, label: "High def" },
];

const tickFormatter = (value: number) => {
  const match = xTicks.find((t) => Math.abs(t.value - value) < 5);
  return match ? match.label : "";
};

export const DpsChart = ({ data }: { data: DpsDataPoint[] }) => {
  const xs = data.map((d) => d.x);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
      >
        {/* <Legend wrapperStyle={{ color: "#ccc" }} /> */}
        {/* <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" /> */}
        <XAxis
          dataKey="x"
          type="number"
          domain={[xMin, xMax]}
          ticks={xTicks.map((t) => t.value)}
          tickFormatter={tickFormatter}
          // label={{
          //   value: "Defence Level",
          //   position: "insideBottom",
          //   offset: 0,
          //   fill: "#000",
          // }}
          tick={{ fill: "#000" }}
          stroke="#555"
        />
        <YAxis
          label={{
            value: "DPS",
            // angle: -90,
            position: "insideLeft",
            offset: 20,
            fill: "#000",
          }}
          tick={false}
          stroke="#000"
          domain={[0, 10]}
          tickCount={1}
        />

        <Line
          type="monotone"
          dataKey="green"
          stroke="#4ade80"
          dot={false}
          isAnimationActive={false}
          strokeWidth={2}
          name="blowpipe"
        />
        <Line
          type="monotone"
          dataKey="blue"
          stroke="#60a5fa"
          dot={false}
          isAnimationActive={false}
          strokeWidth={2}
          name="tonalztics"
        />
        <Line
          type="monotone"
          dataKey="red"
          stroke="#f87171"
          dot={false}
          isAnimationActive={false}
          strokeWidth={2}
          name="bowfa"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const midGameDpsData = Array.from({ length: NUM_POINTS }, (_, i) => {
  const x = X_MIN + (i / (NUM_POINTS - 1)) * (X_MAX - X_MIN);
  return {
    x,
    green: 8.0 * Math.exp(-0.02 * x),
    blue: 6.0 * Math.exp(-0.012 * x),
    red: 4.0 * Math.exp(-0.005 * x),
  };
});

export const MidGameDpsChart = () => <DpsChart data={midGameDpsData} />;

const endGameDpsData = Array.from({ length: NUM_POINTS }, (_, i) => {
  const x = X_MIN + (i / (NUM_POINTS - 1)) * (X_MAX - X_MIN);
  return {
    x,
    green: 8.0 * Math.exp(-0.02 * x),
    blue: 7.0 * Math.exp(-0.012 * x),
    red: 4.2 * Math.exp(-0.005 * x),
  };
});

export const EndGameDpsChart = () => <DpsChart data={endGameDpsData} />;
