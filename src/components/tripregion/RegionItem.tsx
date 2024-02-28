import Image from "next/image";
import { useEffect, useState } from "react";
import TourCategoryItem from "@/components/tripregion/TourCategoryItem";
import { RegionStore } from "@/store/RegionStore";
import { RegionToggleStore } from "@/store/RegionToggleStore";

const RegionItem = ({ regionName = "지역이름" }) => {
  const { selectedRegionName, setRegionName, resetRegionName } = RegionStore();
  const { toggleRegionName, setToggleRegionName } = RegionToggleStore();
  const [isToggle, setIsToggle] = useState(false);

  const selectRegion = () => {
    if (!selectedRegionName) {
      setRegionName(regionName);
    } else {
      setToggleRegionName("");
    }
    if (!toggleRegionName) {
      setToggleRegionName(regionName);
    } else resetRegionName();
  };

  useEffect(() => {
    if (toggleRegionName.length) setIsToggle(toggleRegionName == regionName);
    else setIsToggle(false);
  }, [toggleRegionName, regionName]);

  return (
    <li
      className={`list-none ${isToggle && "grid col-span-2 sm:col-span-3 lg:col-span-4 2xl:col-span-6 my-3 py-5 border-y-4 border-button"}`}
    >
      <button
        type="button"
        onClick={selectRegion}
        className="flex flex-col items-center gap-3 px-3 py-2"
      >
        <div
          className={`relative w-[8.4375rem] h-[8.4375rem] rounded-xl overflow-hidden bg-[#D0CFD7] object-cover ${isToggle && "shadow-md shadow-gray-400"}`}
        >
          <Image
            src="/svg/regionIcon-selected.svg"
            width={20.5}
            height={20}
            alt="선택한 여행 지역"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div>
          <span className="sr-only">지역이름</span>
          <p
            className={`mx-3 my-1 text-lg text-contentSecondary font-medium ${isToggle && "px-3 py-1 rounded-xl bg-point text-white shadow-md shadow-gray-400"}`}
          >
            {regionName}
          </p>
        </div>
      </button>
      {isToggle && (
        <section className="w-full mx-auto mt-2 p-3 rounded-xl bg-button shadow-md shadow-gray-400">
          <div className="flex flex-col gap-2 w-full mb-3 px-3 py-4 rounded-xl bg-white text-contentMuted ">
            <h3 className="text-contentSecondary">지역정보</h3>
            <p>지역 설명 텍스트입니다.</p>
          </div>
          <div className="flex flex-col gap-2 w-full px-3 py-4 rounded-xl bg-white text-contentMuted">
            <h3 className="text-contentSecondary">관광지도</h3>
            <p>궁금한 주제를 선택해 보세요.</p>
            <nav className="flex flex-wrap gap-2 mt-3">
              <TourCategoryItem color="bg-[#F2A868]">관광지</TourCategoryItem>
              <TourCategoryItem color="bg-[#EE7D7B]">숙박</TourCategoryItem>
              <TourCategoryItem color="bg-[#F2A868]">여행코스</TourCategoryItem>
              <TourCategoryItem color="bg-[#EE7DA0]">문화시설</TourCategoryItem>
              <TourCategoryItem color="bg-[#F8D770]">음식점</TourCategoryItem>
              <TourCategoryItem color="bg-[#C0DD7D]">쇼핑</TourCategoryItem>
              <TourCategoryItem color="bg-[#9DCDD0]">레포츠</TourCategoryItem>
              <TourCategoryItem />
            </nav>
          </div>
        </section>
      )}
    </li>
  );
};

export default RegionItem;
