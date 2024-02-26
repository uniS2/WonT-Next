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
import TourCategoryItem from "@/components/tripregion/TourCategoryItem";

function TripRegionPage() {
  const regionData = [
    { id: 1, title: "지역이름1" },
    { id: 2, title: "지역이름2" },
    { id: 3, title: "지역이름3" },
    { id: 4, title: "지역이름4" },
    { id: 5, title: "지역이름5" },
    { id: 7, title: "지역이름7" },
    { id: 8, title: "지역이름8" },
    { id: 9, title: "지역이름9" },
  ];

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
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 h-full">
          <RegionItem key={17} regionName={"이"} />
          <RegionItem key={16} regionName={"이"} />
          <RegionItem key={12} regionName={"이"} />
          <RegionItem key={10} regionName={"이"} />
          <>
            {isToggle ? (
              <section className="grid gap-[0.625rem] place-items-center col-span-2 sm:col-span-3 lg:col-span-4 2xl:col-span-6">
                <div className="w-full mx-auto p-[0.625rem] rounded-[0.625rem] bg-button">
                  <dl className="flex flex-col gap-[0.625rem] w-full mb-[0.625rem] px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
                    <dt className="text-contentSecondary">지역정보</dt>
                    <dd>지역 설명 텍스트입니다.</dd>
                    {selectedRegionName}
                  </dl>
                  <div className="flex flex-col gap-[0.625rem] w-full px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
                    <dl>
                      <dt className="text-contentSecondary">관광지도</dt>
                      <dd>궁금한 주제를 선택해 보세요.</dd>
                    </dl>
                    <div className="flex gap-[0.625rem]">
                      <TourCategoryItem />
                      <TourCategoryItem>#숙박</TourCategoryItem>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <></>
            )}
          </>
          <>
            {regionData.map((name) => {
              <RegionItem key={name.id} regionName={name.title} />;
              /* {
                isToggle ? (
                  <section className="grid gap-[0.625rem] place-items-center col-span-2 sm:col-span-3 lg:col-span-4 2xl:col-span-6">
                    <div className="w-full mx-auto p-[0.625rem] rounded-[0.625rem] bg-button">
                      <dl className="flex flex-col gap-[0.625rem] w-full mb-[0.625rem] px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
                        <dt className="text-contentSecondary">지역정보</dt>
                        <dd>지역 설명 텍스트입니다.</dd>
                        {selectedRegionName}
                      </dl>
                      <dl className="flex flex-col gap-[0.625rem] w-full px-[0.625rem] py-[0.9375rem] rounded-[0.625rem] bg-white text-contentMuted">
                        <dt className="text-contentSecondary">관광지도</dt>
                        <dd>궁금한 주제를 선택해 보세요.</dd>
                      </dl>
                      <button type="button">#관광지</button>
                      <button type="button">#숙박</button>
                    </div>
                  </section>
                ) : (
                  <></>
                );
              } */
            })}
          </>
        </ul>
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
