import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MyBookmarkIcon from "@/components/mypage/MyBookmarkIcon";

function HeaderDetailPage() {
  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between gap-3">
        <button>
          <IoArrowBackCircleOutline size="30px" color="#363636" />
        </button>
        <div className="flex gap-3">
          <button>
            <MyBookmarkIcon size="30px" fill="#363636" />
          </button>
        </div>
      </nav>
      <hr className="my-5" />
    </header>
  );
}

export default HeaderDetailPage;
