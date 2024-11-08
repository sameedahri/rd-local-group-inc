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
        gilroyRegular: ['Gilroy-Regular', 'sans-serif'],
        inikaRegular: ['Inika-Regular', 'sans-serif']
      },
      colors: {
        loginBg: "var(--login-bg)",
        primaryBg: "var(--primary-bg)",
        loginBtn: "var(--login-btn)",
        heading: "var(--heading)",
        sec: "var(--sec)",
        darkBtn: "var(--darkBtn)",
        label: "var(--label)",
        inputOutline: "var(--input-outline)"
      },
      boxShadow: {
        dashboardCard: "0px 1px 5px 0px rgba(0, 0, 0, 0.08)"
      },
      screens: {
        '3xl': {'min': '1650px'}
      }
    },
  },
  plugins: [],
};
export default config;
