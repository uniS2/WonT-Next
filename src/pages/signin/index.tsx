import Image from "next/image";
import SignInLayout from "@/app/signin/layout";
import SignInput from "@/components/sign/SignInput";
import SignButton from "@/components/sign/SignButton";

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
        </div>
        <SignButton text="로그인" />
        <div className="snslogin"></div>
      </div>
    </SignInLayout>
  );
}

export default SignInPage;
