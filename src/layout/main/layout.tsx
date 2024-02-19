import "@/styles/globals.css";
import HeaderMain from "@/components/header/HeaderMain";
import Head from "next/head";

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Main - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderMain />

      <section className="flex h-auto w-auto flex-col items-center">
        {children}
      </section>
    </>
  );
}

export default MainLayout;
