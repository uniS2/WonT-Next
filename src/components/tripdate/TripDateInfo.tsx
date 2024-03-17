import React from "react";
import Image from "next/image";
import { DatesStore } from "@/store/DatesStore";

type TripDateInfoProps = {
  contents: string;
  isPoint?: boolean;
};

export const TripDateInfo = ({
  contents,
  isPoint = false,
}: TripDateInfoProps) => {
  const { tripDates } = DatesStore();
  let title = "여행 제목";

  if (Boolean(tripDates)) {
    title = "선택한 여행 기간";
    isPoint = true;
  } else {
    title = "오늘 날짜";
  }

  const imageSrc =
    "/svg/" +
    (title == "다가오는 여행"
      ? "plane-paper.svg"
      : Boolean(tripDates)
        ? "calendar-selected.svg"
        : "calendar-inSelected.svg");

  return (
    <div className="flex flex-col gap-y-[0.3125rem] min-w-80 py-[0.625rem]">
      <div className="flex gap-[0.3125rem]">
        <Image src={imageSrc} alt={title} width={24} height={24} />
        <span
          className={`${isPoint ? "text-content" : "text-contentSecondary"} font-bold`}
          aria-hidden
        >
          {title}
        </span>
      </div>
      <p
        className={`ml-[0.3125rem] ${isPoint ? "text-[#2966E3]" : "text-contentMuted"}`}
      >
        {contents}
      </p>
    </div>
  );
};
