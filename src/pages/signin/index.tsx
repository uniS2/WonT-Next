import Image from "next/image";
import SignInLayout from "@/app/signin/layout";
import SignInput from "@/components/sign/SignInput";
import SignButton from "@/components/sign/SignButton";
import SignBox from "@/components/sign/SignBox";
import SignSns from "@/components/sign/SignSns";

function SignInPage() {
  return (
    <SignInLayout>
      <div className="pt-[5.25rem] flex flex-col">
        <div className="flex flex-col justify-center items-center gap-5">
          <Image
            src="/svg/logo.svg"
            alt="wont 로고"
            width={150}
            height={50}
            priority
          />
          <SignInput
            type="email"
            text="이메일 주소"
            placeholder="이메일 주소를 입력해주세요"
          />
          <SignInput
            type="password"
            text="비밀번호"
            placeholder="비밀번호를 입력해주세요"
          />
          <SignButton text="로그인" />
          <SignBox />
          <div className="w-[320px] flex items-center justify-center mt-[100px] mb-[30px]">
            <div className="border-b border-gray-300 w-[90px] mr-2"></div>
            <div className="text-gray-600">SNS 간편 로그인</div>
            <div className="border-b border-gray-300 w-[90px] ml-2"></div>
          </div>
          <SignSns />
        </div>
      </div>
    </SignInLayout>
  );
}

export default SignInPage;
