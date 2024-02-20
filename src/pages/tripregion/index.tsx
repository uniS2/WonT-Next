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
  const { selectedRegionName } = RegionStore();

  const inSelectedTripRegion = () => {
    toast.error("여행 장소를 선택해 주세요!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <TripRegionLayout>
      <div className="flex flex-col items-center gap-y-[1.875rem] mb-[1.875rem]">
        <HeaderTripSelect inBackButton />
        <TripTitle
          title="어디로 떠나시나요?"
          guide="여행할 지역을 선택해 주세요."
        />
        <label className="flex items-center gap-[0.625rem] min-w-80 px-[0.625rem] border-b border-[#D0CFD7] overflow-hidden autofill:rounded-full autofill:border autofill:border-primary autofill:shadow-lg">
          <IoSearch size={"1.25rem"} color="#D0CFD7" />
          <input
            type="search"
            placeholder="지역명을 검색해 주세요."
            className="w-full p-[0.625rem] text-sm font-light outline-none"
          />
        </label>
        <div className="flex flex-wrap items-start gap-x-[0.625rem] min-h-[27.125rem]">
          <RegionItem regionName="지역이름1" />
          <RegionItem regionName="지역이름2" />
          <RegionItem regionName="지역이름3" />
          <RegionItem regionName="지역이름4" />
        </div>
        <ButtonLarge
          isSelected={typeof selectedRegionName == "string"}
          href="/tripdays"
          onClick={inSelectedTripRegion}
        />
      </div>
    </TripRegionLayout>
  );
}

export default TripRegionPage;
