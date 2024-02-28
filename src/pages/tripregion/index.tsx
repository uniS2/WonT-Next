import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoSearch } from "react-icons/io5";

import TripRegionLayout from "@/layout/tripregion/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import RegionItem from "@/components/tripregion/RegionItem";
import { RegionStore } from "@/store/RegionStore";

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

  const inSelectedTripRegion = () => {
    toast.error("여행 장소를 선택해 주세요!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <TripRegionLayout>
      <HeaderTripSelect inBackButton inHomeButton />
      <main className="flex flex-col items-center gap-y-8 my-8">
        <TripTitle
          title="어디로 떠나시나요?"
          guide="여행할 지역을 선택해 주세요."
        />
        <label className="flex items-center gap-3 w-full max-w-xs sm:max-w-md lg:max-w-lg 2xl:max-w-2xl px-3 border-b border-[#D0CFD7] overflow-hidden autofill:rounded-full autofill:border autofill:border-primary autofill:shadow-lg">
          <IoSearch size={"1.25rem"} color="#D0CFD7" title="검색" />
          <input
            type="search"
            placeholder="지역명을 검색해 주세요."
            className="w-full p-3 text-sm font-light outline-none"
          />
        </label>
        <ul className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 h-full">
          {regionData.map((name) => {
            return <RegionItem key={name.id} regionName={name.title} />;
          })}
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
