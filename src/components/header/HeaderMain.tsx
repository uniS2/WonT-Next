import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import Logo from "@/public/svg/logo.svg";
import Image from "next/image";
import { PiUserCircle } from "react-icons/pi";

const HeaderMain = () => {
  return (
    <nav className="pt-[1.25rem] pl-[1.25rem] h-[3.75rem] flex justify-between px-[20px]">
      <Link href="/main">
        <Image src={Logo} priority alt="Wont 로고" height={30} width={75} />
      </Link>

      <div className="flex gap-3">
        <Link href="/main">
          <AiOutlineHome size={30} />
        </Link>
        <Link href="/mypage">
          <PiUserCircle size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default HeaderMain;
