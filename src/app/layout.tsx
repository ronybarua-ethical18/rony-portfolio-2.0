import type { Metadata } from "next";
import { Kurale } from "next/font/google";
import "./globals.css";

const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kurale.className} sixteen-hundred:w-[85%] w-[95%] sm:w-[90%] lg:w-[70%] mx-auto pt-10 max-w-[1500px] overflow-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
