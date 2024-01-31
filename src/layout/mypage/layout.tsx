import HeaderMypage from "@/components/header/HeaderMypage";
import "@/styles/globals.css";
import Head from "next/head";

function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Sign In - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderMypage />
      <section>{children}</section>
    </>
  );
}

export default MyPageLayout;
