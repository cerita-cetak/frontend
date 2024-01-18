import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          1: "#e3e5e2",
          2: "#c7ccc6",
          3: "#acb3aa",
          4: "#919b8f",
          5: "#788375",
          6: "#5f6d5c",
          7: "#475644",
          8: "#31412d",
          9: "#1b2d18",
          10: "#071a04",
        },
        background: {
          1: "#f3fdf2",
          2: "#d3dcd2",
          3: "#b4bcb4",
          4: "#979d96",
          5: "#7a7f79",
          6: "#5e625e",
          7: "#444743",
          8: "#2b2d2b",
          9: "#141614",
          10: "#030303",
          11: "#030d02",
          12: "#020a01",
          13: "#020701",
          14: "#010501",
          15: "#010300",
        },
        primary: {
          1: "#effded",
          2: "#dffadb",
          3: "#cef7c9",
          4: "#bdf4b7",
          5: "#acf1a4",
          6: "#9aed91",
          7: "#86e97d",
          8: "#71e567",
          9: "#59e14e",
          10: "#38dd2c",
        },
        secondary: {
          1: "#f4fbfd",
          2: "#e9f8fb",
          3: "#def4fa",
          4: "#d2f1f8",
          5: "#c7edf6",
          6: "#bbe9f4",
          7: "#afe5f2",
          8: "#a3e2f0",
          9: "#96deee",
          10: "#89daec",
          11: "#76bdcd",
          12: "#64a2af",
          13: "#538792",
          14: "#426c76",
          15: "#31545b",
        },
        accent: {
          1: "#eef4fd",
          2: "#dceafb",
          3: "#cbdff9",
          4: "#bad4f7",
          5: "#a9c9f4",
          6: "#98bef1",
          7: "#87b3ee",
          8: "#76a8eb",
          9: "#659de8",
          10: "#5392e4",
          11: "#477ec6",
          12: "#3b6ba9",
          13: "#30588d",
          14: "#254672",
          15: "#1b3558",
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
