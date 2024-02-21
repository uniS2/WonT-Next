import "@/styles/globals.css";
import Head from "next/head";
import HeaderMain from "@/components/header/HeaderMain";

function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Search - WonT</title>
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

export default SearchLayout;
