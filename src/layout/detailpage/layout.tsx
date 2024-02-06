import HeaderDetailPage from "@/components/header/HeaderDetailPage";
import Head from "next/head";
import "@/styles/globals.css";

function DetailPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>MyPage - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderDetailPage />
      <section>{children}</section>
    </>
  );
}

export default DetailPageLayout;
