import OnBoardingButton from "@/components/onboarding/OnBoardingButton";
import OnBoardingContentBox from "@/components/onboarding/OnBoardingContentBox";
import OnBoardingSideButton from "@/components/onboarding/OnBoardingSideButton";
import Layout from "@/layout/onboarding/layout";
function OnBoardingPage() {
  return (
    <Layout>
      <main>
        <div className="mt-[120px]">
          <div className="text-[30px] mb-[10px]">
            <p>여행</p>
            <p>계획부터 시작!</p>
          </div>
          <div className="text-[16px] text-gray-400">
            <p>행복한 여행을 위해 WonT에서</p>
            <p>당신의 일정을 세워보세요.</p>
          </div>
        </div>
        <div className="mt-[100px] flex">
          <OnBoardingSideButton />
          <OnBoardingContentBox />
        </div>
        <div className="flex flex-col gap-5 mt-[80px]">
          <OnBoardingButton
            text="WonT 시작하기"
            href="/signin"
            color="primary"
          />
          <OnBoardingButton
            text="회원가입"
            color="contentSecondary"
            href="/signup"
          />
        </div>
      </main>
    </Layout>
  );
}

export default OnBoardingPage;
