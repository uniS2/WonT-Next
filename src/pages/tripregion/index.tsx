import Image from "next/image";
import TripRegionLayout from "@/layout/tripregion/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import RegionItem from "@/components/tripregion/RegionItem";

function TripRegionPage() {
  return (
    <TripRegionLayout>
      <div className="flex flex-col items-center gap-y-[1.875rem] mb-[1.875rem]">
        <HeaderTripSelect />
        <TripTitle
          title="어디로 떠나시나요?"
          guide="여행할 지역을 선택해 주세요."
        />
        <label className="flex items-center gap-[0.625rem] min-w-80 px-[0.625rem] border-b border-[#D0CFD7] overflow-hidden autofill:rounded-full autofill:border autofill:border-primary autofill:shadow-lg">
          <Image
            src="/svg/search-inSearched.svg"
            width={20}
            height={20}
            alt="검색"
          />
          <input
            type="search"
            placeholder="지역명을 검색해 주세요."
            className="w-full p-[0.625rem] text-sm font-light outline-none"
          />
        </label>
        <div className="flex flex-wrap items-start gap-x-[0.625rem] min-h-[27.125rem]">
          <RegionItem />
          <RegionItem />
          <RegionItem />
          <RegionItem />
        </div>
        <ButtonLarge>선택 완료</ButtonLarge>
      </div>
    </TripRegionLayout>
  );
}

export default TripRegionPage;
