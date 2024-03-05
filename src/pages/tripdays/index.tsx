import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TripDaysLayout from "@/layout/tripdays/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import { TripCalendar } from "@/components/tripdays/TripCalendar";
import { TripDateInfo } from "@/components/tripdays/TripDateInfo";
import { TripScheduleInfo } from "@/components/tripdays/TripScheduleInfo";
import ButtonLarge from "@/components/tripselect/ButtonLarge";
import { DaysStore } from "@/store/DaysStore";
import { getTripDateKo } from "@/utils/getTripDay";

const TripDaysPage = () => {
  const { tripDays } = DaysStore();

  const selectDaysInfoText =
    tripDays.length == 1
      ? getTripDateKo(tripDays[0])
      : `${getTripDateKo(tripDays[0])} ~ ${getTripDateKo(tripDays[1])}`;

  const inSelectedTripDays = () => {
    toast.error("여행 일자를 선택해 주세요!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <TripDaysLayout>
      <HeaderTripSelect inCloseButton />
      <TripTitle title="언제 떠나시나요?" guide="여행 일자를 선택해 주세요." />
      <TripCalendar />
      <TripDateInfo contents={selectDaysInfoText} />
      <TripScheduleInfo />
      <ButtonLarge
        isSelected={tripDays.length == 2}
        href="/tripedit"
        onClick={inSelectedTripDays}
      />
    </TripDaysLayout>
  );
};

export default TripDaysPage;
