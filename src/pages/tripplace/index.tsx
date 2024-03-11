import TripPlaceLayout from "@/layout/tripplace/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripPlacesMap from "@/components/tripplace/TripPlacesMap";
import TripRegionDaysEdit from "@/components/common/TripRegionDaysEdit";
import SelectDateInfo from "@/components/common/SelectDateInfo";
import SelectItem from "@/components/common/SelectItem";
import ButtonLarge from "@/components/common/ButtonLarge";
import { LocationPlacesStore, SelectPlacesStore } from "@/store/PlacesStore";
import DefaultImage from "@/components/common/DefaultImage";
import LocalPlaceItem from "@/components/tripplace/LocalPlaceItem";

const TripPlacePage = () => {
  const { locationPlaces } = LocationPlacesStore();
  const { selectedPlaces, resetSelectedPlaces } = SelectPlacesStore();
  const isSelected = Boolean(selectedPlaces);
  const totalNumberText = Object.keys(selectedPlaces!).length;

  return (
    <TripPlaceLayout>
      <HeaderTripSelect isPadding inCloseButton />
      <TripPlacesMap />
      <TripRegionDaysEdit />
      <section className="flex flex-col gap-5 w-full p-5">
        <div className="flex justify-between">
          <SelectDateInfo totalNumber={totalNumberText} />
          <button
            type="button"
            onClick={resetSelectedPlaces}
            className="w-20 h-7 rounded-md border border-contentMuted  text-sm text-contentMuted hover:bg-secondary hover:border-black hover:text-black hover:font-semibold"
          >
            초기화
          </button>
        </div>
        <ul
          className={`grid grid-cols-1 lg:grid-cols-2 gap-3 w-full pr-3 py-3 rounded-xl ${isSelected ? "bg-button" : "bg-[#E9F0F0]"}`}
        >
          {isSelected ? (
            /* selectedPlaces!.map((place, index) => (
              <SelectItem
                key={place.contentid}
                index={index + 1}
                title={place.title}
                addr={`${place.addr2 ? place.addr1 + " " + place.addr2 : place.addr1}`}
                imgSrc={place.firstimage || place.firstimage2}
              />
            )) */
            <SelectItem />
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
            {locationPlaces &&
              locationPlaces.map((place, index) => (
                <LocalPlaceItem
                  key={index}
                  id={place.contentid}
                  title={place.title}
                  addr={`${place.addr2 ? place.addr1 + " " + place.addr2 : place.addr1}`}
                  imgSrc={place.firstimage || place.firstimage2}
                />
              ))}
          </ul>
        </div>
      </section>
      <ButtonLarge href="/tripeidt" />
    </TripPlaceLayout>
  );
};

export default TripPlacePage;
