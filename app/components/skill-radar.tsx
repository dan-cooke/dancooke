"use client";

import dynamic from "next/dynamic";

const ResponsiveRadar = dynamic(
  () => import("@nivo/radar").then((m) => m.ResponsiveRadar),
  { ssr: false },
);

const data = [
  {
    taste: "fruity",
    chardonay: 80,
    carmenere: 95,
    syrah: 83,
  },
  {
    taste: "bitter",
    chardonay: 69,
    carmenere: 41,
    syrah: 28,
  },
  {
    taste: "heavy",
    chardonay: 30,
    carmenere: 67,
    syrah: 56,
  },
  {
    taste: "strong",
    chardonay: 61,
    carmenere: 73,
    syrah: 57,
  },
  {
    taste: "sunny",
    chardonay: 71,
    carmenere: 27,
    syrah: 87,
  },
];
export const SkillRadar = () => {
  return (
    <ResponsiveRadar
      data={data}
      keys={["chardonay", "carmenere", "syrah"]}
      indexBy="taste"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};
