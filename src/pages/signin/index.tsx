import Image from "next/image";
import SignInLayout from "@/layout/signin/layout";
import SignInput from "@/components/sign/SignInput";
import SignButton from "@/components/sign/SignButton";
import SignBox from "@/components/sign/SignBox";
import SignSns from "@/components/sign/SignSns";
import { useState } from "react";
import useSignInStore from "@/store/useSignInStore";
import supabase from "@/lib/supabase/supabase";
import { useRouter } from "next/router";

const SignInPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSignInStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useSignInStore(
    (state) => state.setIsAuthenticated,
  );

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw new Error(error.message);
      }
      if (data) {
        setIsAuthenticated(true);
        console.log("로그인완료");
        router.push("/signnickname");
      }
    } catch (error) {
      console.error("로그인 실패:");
    }
  };
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
            placeholder="이메일 주소를 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SignInput
            type="password"
            text="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignButton text="로그인" onClick={handleLogin} />
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
};

export default SignInPage;
