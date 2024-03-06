import OnBoardingButton from "@/components/onboarding/OnBoardingButton";
import Layout from "@/layout/onboarding/layout";
import Image from "next/image";
function OnBoardingPage() {
  return (
    <Layout>
      <section className="relative h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <Image src={"/svg/logo.svg"} alt="로고" width={200} height={100} />
          <div className="text-[16px] text-black mb-[30px]">
            <p>행복한 여행을 위해 일정을 세워보세요</p>
          </div>
          <Image
            src={"/images/test.jpeg"}
            alt="로고"
            width={200}
            height={100}
            className="mb-[20px]"
          />
          <OnBoardingButton
            text="WonT 시작하기"
            href="/signin"
            color="primary"
          />
        </div>
      </section>
    </Layout>
  );
}

export default OnBoardingPage;
