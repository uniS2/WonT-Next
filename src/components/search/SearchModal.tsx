import React from "react";
import { useState } from "react";
import ModalType from "./ModalType";
import ModalLocal from "./ModalLocal";
const SearchModal = () => {
  const [toggle, setToggle] = useState(false);
  const [localToggle, setLocalToggle] = useState(false);
  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleModalLocal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLocalToggle(!localToggle);
    console.log(localToggle);
  };

  return (
    <div className="flex flex-col gap-2 items-end w-[320px] h-[60px] pt-[20px]">
      <button
        type="button"
        className="w-[90px] h-[26px] border border-[#5F8CEA] text-[14px] font-semibold text-[#5F8CEA] rounded-md"
        onClick={handleModal}
      >
        관광타입 선택
      </button>
      <button
        type="button"
        className="w-[80px] h-[26px] border border-[#5F8CEA] text-[14px] font-semibold text-[#5F8CEA] rounded-md"
        onClick={handleModalLocal}
      >
        지역 선택
      </button>
      {toggle && <ModalType />}
      {localToggle && <ModalLocal />}
    </div>
  );
};

export default SearchModal;
