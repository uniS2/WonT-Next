import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TripDateLayout from "@/layout/tripdate/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/common/TripTitle";
import { TripCalendar } from "@/components/tripdate/TripCalendar";
import { TripDateInfo } from "@/components/tripdate/TripDateInfo";
import { TripScheduleInfo } from "@/components/tripdate/TripScheduleInfo";
import ButtonLarge from "@/components/common/ButtonLarge";
import { DatesStore } from "@/store/DatesStore";
import { getTripDateKo } from "@/utils/getTripDate";
import { SelectPlacesStore } from "@/store/PlacesStore";

const TripDatePage = () => {
  const { tripDates } = DatesStore();
  const { setTripPlacesRange } = SelectPlacesStore();

  useEffect(() => {
    if (tripDates) {
      setTripPlacesRange(tripDates.length);
    }
  }, [tripDates]);

  const selectDatesRangeText = tripDates
    ? `${tripDates[0]} ~ ${tripDates[tripDates.length - 1]}`
    : getTripDateKo(new Date());

  const inSelectedTripDates = () => {
    toast.error("여행 일자를 선택해 주세요!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <TripDateLayout>
      <HeaderTripSelect inCloseButton />
      <TripTitle title="언제 떠나시나요?" guide="여행 일자를 선택해 주세요." />
      <TripCalendar />
      <TripDateInfo contents={selectDatesRangeText} />
      <TripScheduleInfo />
      <ButtonLarge
        isSelected={Boolean(tripDates)}
        href="/tripedit"
        onClick={inSelectedTripDates}
      />
    </TripDateLayout>
  );
};

export default TripDatePage;
