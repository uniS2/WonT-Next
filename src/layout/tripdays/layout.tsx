import "@/styles/globals.css";
import Head from "next/head";

function TripDaysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>TripDays - WonT</title>
        <meta name="description" content="여행 기간 선택 페이지입니다." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section
        className="flex flex-col items-center min-h-[50rem] mx-5 mb-[1.875rem]
      "
      >
        {children}
      </section>
    </>
  );
}

export default TripDaysLayout;
