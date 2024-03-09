import TripAccommodationLayout from "@/layout/tripaccommodation/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripAccommodationMap from "@/components/tripaccommodation/TripAccommodationMap";
import TripRegionDaysEdit from "@/components/common/TripRegionDaysEdit";
import SelectDaysInfo from "@/components/tripselect/SelectDaysInfo";
import DefaultImage from "@/components/common/DefaultImage";
import SelectItem from "@/components/tripselect/SelectItem";
import LocalItem from "@/components/tripselect/LocalItem";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import { AccommodationStore } from "@/store/AccommodationStore";

function TripRegionPage() {
  const {
    locationAccommodation,
    selectedAccommodation,
    resetSelectedAccommodation,
  } = AccommodationStore();
  const isSelected = Boolean(selectedAccommodation);

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
            onClick={resetSelectedAccommodation}
            className="w-20 h-7 rounded-md border border-contentMuted  text-sm text-contentMuted hover:bg-secondary hover:border-black hover:text-black hover:font-semibold"
          >
            초기화
          </button>
        </div>
        <ul
          className={`grid grid-cols-1 lg:grid-cols-2 gap-3 w-full pr-3 py-3 rounded-xl ${isSelected ? "bg-button" : "bg-[#E9F0F0]"}`}
        >
          {isSelected ? (
            selectedAccommodation!.map((accommodation, index) => (
              <SelectItem
                key={accommodation.contentid}
                index={index + 1}
                title={accommodation.title}
                addr={`${accommodation.addr2 ? accommodation.addr1 + " " + accommodation.addr2 : accommodation.addr1}`}
                imgSrc={accommodation.firstimage || accommodation.firstimage2}
              />
            ))
          ) : (
            <li className="flex gap-5 pl-5 items-center justify-start w-full">
              <span className="w-5 h-5 rounded-full bg-[#D0CFD7] text-center text-[#F3F5F5] leading-5">
                1
              </span>
              <div className="flex gap-3 items-center w-full p-3 rounded-xl bg-white">
                <DefaultImage />
                <p className="text-sm text-contentMuted">
                  추가된 장소가 없습니다.
                </p>
              </div>
            </li>
          )}
        </ul>
        <div
          className={`pt-5 border-t-4 ${isSelected ? "border-primary" : "border-[#D0CFD7]"}`}
        >
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full p-3 rounded-xl bg-[#E9F0F0]">
            {locationAccommodation &&
              locationAccommodation.map((location, index) => (
                <LocalItem
                  key={index}
                  id={location.contentid}
                  title={location.title}
                  addr={`${location.addr2 ? location.addr1 + " " + location.addr2 : location.addr1}`}
                  imgSrc={location.firstimage || location.firstimage2}
                />
              ))}
          </ul>
        </div>
      </section>
      <ButtonLarge href="/tripeidt" />
    </TripAccommodationLayout>
  );
}

export default TripRegionPage;
