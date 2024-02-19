import React from "react";
import Image from "next/image";
import { signInWithGoogle, signInWithKakao } from "@/lib/supabase/supabase";
function SignSns() {
  const handleGoogleSignIn = async () => {
    try {
      const userData = await signInWithGoogle();
      console.log("로그인이 된거여 ??", userData);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleKakaoSignIn = async () => {
    try {
      const userData = await signInWithKakao();
      console.log("카카오로 로그인한 사용자 정보:", userData);
    } catch (error) {
      console.error("Kakao sign-in error:", error);
    }
  };

  return (
    <div className="flex justify-center gap-20 w-[280px]">
      <button
        type="button"
        className="flex flex-col item-center justify-center gap-3"
        onClick={handleKakaoSignIn}
      >
        <Image
          src="/svg/kakao-login.svg"
          alt="카카오톡"
          width={50}
          height={50}
          priority
        />
        <div className="text-gray-400">
          <p className=" ">카카오톡</p>
          <p>시작하기</p>
        </div>
      </button>

      <button
        type="button"
        className="flex flex-col item-center justify-center gap-3"
        onClick={handleGoogleSignIn}
      >
        <Image
          src="/svg/google-login.svg"
          alt="구글"
          width={50}
          height={50}
          priority
        />
        <div className="text-gray-400">
          <p className=" ">Google</p>
          <p>시작하기</p>
        </div>
      </button>
    </div>
  );
}

export default SignSns;
