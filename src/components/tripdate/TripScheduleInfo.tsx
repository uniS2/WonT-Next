import React from "react";
import Image from "next/image";

type TripScheduleInfoProps = {
  isPoint?: boolean;
  isContents?: boolean;
};

export const TripScheduleInfo = ({
  isPoint = false,
  isContents = false,
}: TripScheduleInfoProps) => {
  // 여행 일정 있을시 isPoint = true 로직 처리 예정

  return (
    <div className="flex flex-col gap-y-[0.3125rem] min-w-80 py-[0.625rem]">
      <div className="flex gap-[0.3125rem]">
        <Image
          src="/svg/plane-paper.svg"
          alt="다가오는 여행"
          width={24}
          height={24}
        />
        <span
          className={`${isPoint ? "text-content" : "text-contentSecondary"} font-bold`}
          aria-hidden
        >
          다가오는 여행
        </span>
      </div>
      {isContents ? (
        <div>여행 일정이 존재합니다.</div>
      ) : (
        <p className="ml-[0.3125rem] text-contentMuted">
          예정된 여행이 없습니다. (*일정 로직 처리 예정)
        </p>
      )}
    </div>
  );
};
