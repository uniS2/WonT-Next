import SignInLayout from "@/app/signin/layout";
import SignInput from "@/components/signin/SignInput";
import Image from "next/image";

function SignInPage() {
  return (
    <SignInLayout>
      <div className="pt-[5.25rem]">
        <div className="flex flex-col justify-center items-center gap-10">
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

        <div className="snslogin"></div>
      </div>
    </SignInLayout>
  );
}

export default SignInPage;
