import SignInLayout from "@/app/signin/layout";
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
          <div className="pt-[3.125rem] min-w-[18.75rem] sm:min-w-[31.25rem] lg:min-w-[43.75rem] 2xl:min-w-[56.25rem] flex flex-col gap-3 border-b-2 border-primary mx-auto pb-[0.313rem]">
            <p className="text-[1rem] sm:text-[1.25rem] lg:text-[1.563rem]">
              이메일 주소
            </p>
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="text-[1rem] sm:text-[1.25rem] lg:text-[1.563rem]"
            />
          </div>
        </div>

        <div className="snslogin"></div>
      </div>
    </SignInLayout>
  );
}

export default SignInPage;
