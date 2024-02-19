import React, { ReactNode } from "react";
import Image from "next/image";
import AirPlane from "@/public/svg/planeIcon.svg";
import Link from "next/link";

const MakePlan = () => {
  return (
    <div className="flex flex-col items-center gap-3 w-[320px] h-[150px] border px-[68px] py-[15px] mt-[30px] rounded-xl  shadow-md">
      <button type="button">
        <Link href={"/tripregion"}>
          <Image src={AirPlane} width={50} height={50} priority alt="비행기" />
        </Link>
      </button>
      <p className="text-[12px]  text-contentSecondary">
        새로운 일정을 추가해보세요!
      </p>
      <div className="relative">
        <p className="text-[16px]">여행 일정 만들기</p>
        <div className="h-[8px] w-[110px] bg-primary/40 absolute bottom-1"></div>
      </div>
    </div>
  );
};

export default MakePlan;
