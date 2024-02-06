import Head from "next/head";
import "@/styles/globals.css";
import HeaderEditProfile from "@/components/header/HeaderEditProfile";

function EditProfileLayout({
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
      <HeaderEditProfile />
      <section>{children}</section>
    </>
  );
}

export default EditProfileLayout;
