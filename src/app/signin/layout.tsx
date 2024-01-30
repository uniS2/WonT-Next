import "@/styles/globals.css";
import HeaderSign from "@/components/header/HeaderSign";

function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderSign />
      <section className="flex h-auto w-auto flex-col items-center">
        {children}
      </section>
    </>
  );
}

export default SignInLayout;
