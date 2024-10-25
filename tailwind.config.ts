import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroyMedium: ['Gilroy-Medium', 'sans-serif'],
        gilroySemibold: ['Gilroy-Semibold', 'sans-serif'],
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
      },
      colors: {
        loginBg: "var(--login-bg)",
        primaryBg: "var(--primary-bg)",
        loginBtn: "var(--login-btn)",
        heading: "var(--heading)",
        sec: "var(--sec)",
        darkBtn: "var(--darkBtn)"
      },
    },
  },
  plugins: [],
};
export default config;
