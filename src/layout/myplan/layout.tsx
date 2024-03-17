import "@/styles/globals.css";
import Head from "next/head";

const MyPlanDetailLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Head>
        <title>My Plan - WonT</title>
        <meta name="description" content="여행 일정 상세 페이지입니다." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section
        className="flex flex-col items-center min-w-[22.5rem] mb-5
      "
      >
        {children}
      </section>
    </>
  );
};

export default MyPlanDetailLayout;
