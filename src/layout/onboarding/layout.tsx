import "@/styles/globals.css";
import Head from "next/head";

function OnBoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-t from-white to-blue-200 flex h-auto w-auto flex-col items-center">
        {children}
      </section>
    </>
  );
}

export default OnBoardingLayout;
