import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const GothicA1 = localFont({
  src: [
    { path: "/fonts/GothicA1-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/GothicA1-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/GothicA1-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/GothicA1-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--gothic-a1",
});

const IBMPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "/fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--ibm-plex-sans",
});

const BebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="ko"
      className={`${GothicA1.variable} ${IBMPlexSans.variable} ${BebasNeue.variable} font-gothic`}
    >
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
