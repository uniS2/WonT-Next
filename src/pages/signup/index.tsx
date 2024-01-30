import Image from "next/image";
import SignUpLayout from "@/app/signup/layout";
import SignInput from "@/components/sign/SignInput";
import SignButton from "@/components/sign/SignButton";

function SignUpPage() {
  return (
    <SignUpLayout>
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
            placeholder="이메일 주소를 입력해 주세요"
          />
          <SignInput
            type="text"
            text="닉네임"
            placeholder="닉네임을 입력해 주세요"
          />
          <SignInput
            type="password"
            text="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
          />
          <SignInput
            type="password"
            text="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해 주세요"
          />
          <SignButton text="회원가입" />
        </div>
      </div>
    </SignUpLayout>
  );
}

export default SignUpPage;
