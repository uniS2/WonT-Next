import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoSearch } from "react-icons/io5";

import TripRegionLayout from "@/layout/tripregion/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import RegionItem from "@/components/tripregion/RegionItem";
import { RegionStore } from "@/store/RegionStore";
import { RegionToggleStore } from "@/store/RegionToggleStore";
import { useEffect, useState } from "react";

function TripRegionPage() {
  const { selectedRegionName } = RegionStore();
  const { toggleRegionName } = RegionToggleStore();
  const [isToggle, setIsToggle] = useState(false);

  const inSelectedTripRegion = () => {
    toast.error("여행 장소를 선택해 주세요!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  useEffect(() => {
    if (toggleRegionName.length)
      setIsToggle(toggleRegionName == selectedRegionName);
    else setIsToggle(false);
  }, [toggleRegionName, selectedRegionName]);

  return (
    <TripRegionLayout>
      <HeaderTripSelect inBackButton inHomeButton />
      <main className="flex flex-col items-center gap-y-[1.875rem] my-[1.875rem]">
        <TripTitle
          title="어디로 떠나시나요?"
          guide="여행할 지역을 선택해 주세요."
        />
        <label className="flex items-center gap-[0.625rem] min-w-80 px-[0.625rem] border-b border-[#D0CFD7] overflow-hidden autofill:rounded-full autofill:border autofill:border-primary autofill:shadow-lg">
          <IoSearch size={"1.25rem"} color="#D0CFD7" title="검색" />
          <input
            type="search"
            placeholder="지역명을 검색해 주세요."
            className="w-full p-[0.625rem] text-sm font-light outline-none"
          />
        </label>
        <ul className="flex flex-wrap items-start gap-x-[0.625rem] h-full">
          <RegionItem regionName="지역이름1" />
          <RegionItem regionName="지역이름2" />
          <RegionItem regionName="지역이름3" />
          <RegionItem regionName="지역이름4" />
        </ul>
        {isToggle ? (
          <div className="flex flex-col gap-[0.625rem] mx-auto p-[0.625rem] rounded-[0.625rem] bg-button">
            <dl className="flex flex-col gap-[0.625rem] w-[18.75rem] px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
              <dt className="text-contentSecondary">지역정보</dt>
              <dd>지역 설명 텍스트입니다.</dd>
              {selectedRegionName}
            </dl>
            <dl className="flex flex-col gap-[0.625rem] w-[18.75rem] px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
              <dt className="text-contentSecondary">관광지도</dt>
              <dd>궁금한 주제를 선택해 보세요.</dd>
            </dl>
          </div>
        ) : (
          <></>
        )}
        <ButtonLarge
          isSelected={Boolean(selectedRegionName)}
          href="/tripdays"
          onClick={inSelectedTripRegion}
        />
      </main>
    </TripRegionLayout>
  );
}

export default TripRegionPage;
