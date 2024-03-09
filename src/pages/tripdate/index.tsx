import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TripDateLayout from "@/layout/tripdate/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import { TripCalendar } from "@/components/tripdate/TripCalendar";
import { TripDateInfo } from "@/components/tripdate/TripDateInfo";
import { TripScheduleInfo } from "@/components/tripdate/TripScheduleInfo";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import { DatesStore } from "@/store/DatesStore";
import { getTripDateKo } from "@/utils/getTripDate";

const TripDatePage = () => {
  const { tripDates } = DatesStore();

  const selectDaysInfoText = tripDates
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
      <TripDateInfo contents={selectDaysInfoText} />
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
