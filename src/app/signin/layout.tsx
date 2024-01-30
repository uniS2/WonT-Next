import "@/styles/globals.css";
import HeaderSign from "@/components/header/HeaderSign";

function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex h-auto w-auto flex-col">
        <HeaderSign />
        {children}
      </section>
    </>
  );
}

export default SignInLayout;
