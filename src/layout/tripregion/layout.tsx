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
        <title>TripRegion - WonT</title>
        <meta name="description" content="여행 지역 선택 페이지입니다." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section
        className="flex flex-col items-center px-5 gap-y-[1.875rem] min-h-screen
      "
      >
        {children}
      </section>
    </>
  );
};

export default TripRegionLayout;
