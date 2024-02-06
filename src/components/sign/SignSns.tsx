import React from "react";
import Image from "next/image";

function SignSns() {
  return (
    <div className="flex justify-between w-[280px]">
      <button
        type="button"
        className="flex flex-col item-center justify-center gap-3"
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
      >
        <Image
          src="/svg/apple-login.svg"
          alt="애플"
          width={50}
          height={50}
          priority
        />
        <div className="text-gray-400">
          <p className=" ">Apple ID</p>
          <p>시작하기</p>
        </div>
      </button>
      <button
        type="button"
        className="flex flex-col item-center justify-center gap-3"
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
