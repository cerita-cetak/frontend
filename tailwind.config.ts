import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   mobile_s: "320px",
    //   mobile_l: "425px",
    //   tablet: "768px",
    //   laptop: "1024px",
    //   desktop: "1440px",
    // },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
