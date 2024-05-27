import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";
import ContainerWrapper from "@/components/ContainerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LexisNexis Rule of Law",
  description: "LexisNexis Rule of Lawv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, " h-screen w-auto")}>
        <Header />
        <ContainerWrapper>{children}</ContainerWrapper>
      </body>
    </html>
  );
}
