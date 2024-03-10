import "@/styles/globals.css";
import Head from "next/head";

const TripDateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Head>
        <title>Trip Date - WonT</title>
        <meta name="description" content="여행 기간 선택 페이지입니다." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section
        className="flex flex-col items-center gap-y-[1.875rem] px-5 mb-[1.875rem]
      "
      >
        {children}
      </section>
    </>
  );
};

export default TripDateLayout;
