import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const gilroyMedium = localFont({
  src: "./fonts/gilroy-medium.ttf",
  variable: "--gilroy-medium",
  weight: "400",
});
const gilroySemibold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--gilroy-semibold",
  weight: "400",
});
const gilroyBold = localFont({
  src: "./fonts/gilroy-bold.ttf",
  variable: "--gilroy-bold",
  weight: "400"
});
const inikaRegular = localFont({
  src: "./fonts/inika/Inika-Regular.ttf",
  variable: "--inika-regular",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Restaurant Owners",
  description: "RD Local Group INC. Keeping the Town Talking About Your Business Since 2005.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroySemibold.variable} ${gilroyMedium.variable} ${gilroyBold.variable} ${inikaRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
