import "@/styles/globals.css";
import Head from "next/head";

const TripRegionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Head>
        <title>Trip Region - WonT</title>
        <meta name="description" content="여행 지역 선택 페이지입니다." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section className="px-5 mx-auto">{children}</section>
    </>
  );
};

export default TripRegionLayout;
