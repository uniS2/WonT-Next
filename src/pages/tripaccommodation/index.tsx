import TripAccommodationLayout from "@/layout/tripaccommodation/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripAccommodationMap from "@/components/tripaccommodation/TripAccommodationMap";
import TripRegionDaysEdit from "@/components/common/TripRegionDaysEdit";
import SelectDaysInfo from "@/components/tripselect/SelectDaysInfo";
import SelectItem from "@/components/tripselect/SelectItem";

function TripRegionPage() {
  return (
    <TripAccommodationLayout>
      <HeaderTripSelect isPadding inCloseButton />
      <TripAccommodationMap />
      <TripRegionDaysEdit />
      <section className="flex flex-col gap-5 w-full p-5">
        <div className="flex justify-between">
          <SelectDaysInfo />
          <button
            type="button"
            className="w-20 h-7 rounded-md border border-contentMuted  text-sm text-contentMuted hover:bg-secondary hover:border-black hover:text-black hover:font-semibold"
          >
            초기화
          </button>
        </div>
        <ul className="w-full pl-5 pr-[0.625rem] py-[0.625rem] rounded-[0.625rem] bg-[#E9F0F0]">
          <SelectItem />
        </ul>
      </section>
    </TripAccommodationLayout>
  );
}

export default TripRegionPage;
