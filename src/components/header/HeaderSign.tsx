import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function HeaderSign() {
  return (
    <>
      <div className="h-[3.75rem] w-auto pt-[1.25rem] pl-[1.25rem]">
        <Link href="/">
          <IoArrowBackCircleOutline size={30} />
        </Link>
      </div>
    </>
  );
}

export default HeaderSign;
