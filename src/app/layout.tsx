import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "WonT",
  description: "행복한 여행을 위한 여행일정 플랫폼입니다.",
  icons: {
    icon: "/favicon/favicon.ico",
  },
  keywords: ["여행", "한국", "국내", "korea", "trip", "plan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
