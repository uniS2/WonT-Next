"use client";

import { useRouter } from "next/router";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <IoArrowBackCircleOutline
        size="30px"
        color="#363636"
        title="이전 페이지 바로가기"
      />
    </button>
  );
};

export default BackButton;
