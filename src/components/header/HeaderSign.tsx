import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function HeaderSign() {
  return (
    <>
      <nav className="pt-[1.25rem] pl-[1.25rem] h-[3.75rem] w-auto ">
        <Link href="/">
          <IoArrowBackCircleOutline size={30} />
        </Link>
      </nav>
    </>
  );
}

export default HeaderSign;
