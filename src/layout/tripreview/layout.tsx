import Head from "next/head";
import "@/styles/globals.css";
import HeaderTripReview from "@/components/header/HeaderTripReview";

function TripReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Trip Review - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderTripReview />
      <section>{children}</section>
    </>
  );
}

export default TripReviewLayout;
