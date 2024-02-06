import Head from "next/head";
import HeaderTripEdit from "@/components/header/HeaderTripEdit";
import "@/styles/globals.css";

function TripEditLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Trip Edit - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderTripEdit />
      <section>{children}</section>
    </>
  );
}

export default TripEditLayout;
