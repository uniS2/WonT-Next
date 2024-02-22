import React from "react";

const ModalType = () => {
  return (
    <div className="w-[320px] h-[490px]  py-[17px]">
      <div className=" border-b-2">관광 타입</div>
      {/* 컴포넌트 분리 예정  */}
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">전체</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">관광지</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">문화시설</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">축제 공연 행사</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">여행 코스</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">레포츠</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">숙박</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">쇼핑</p>
      </div>
      <div className="flex gap-8 mt-[12px]">
        <input
          type="checkbox"
          name="check"
          id=""
          className="w-[21px] h-[21px] accent-primary"
        />
        <p className="text-[16px]">음식점</p>
      </div>
    </div>
  );
};

export default ModalType;
