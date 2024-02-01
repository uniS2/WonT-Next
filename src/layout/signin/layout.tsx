import "@/styles/globals.css";
import HeaderSign from "@/components/header/HeaderSign";
import Head from "next/head";

function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>Sign In - WonT</title>
        <meta
          name="description"
          content="행복한 여행을 위한 여행일정 플랫폼입니다."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section className="flex h-auto w-auto flex-col">
        <HeaderSign />
        {children}
      </section>
    </>
  );
}

export default SignInLayout;
