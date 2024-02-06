import TripDaysLayout from "@/layout/tripdays/layout";
import HeaderTripSelect from "@/components/header/HeaderTripSelect";
import TripTitle from "@/components/tripselect/TripTitle";
import ButtonLarge from "@/components/ButtonLarge";

function TripDaysPage() {
  return (
    <TripDaysLayout>
      <HeaderTripSelect />
      <TripTitle title="언제 떠나시나요?" guide="여행 일자를 선택해 주세요." />
      <ButtonLarge>선택 완료</ButtonLarge>
    </TripDaysLayout>
  );
}

export default TripDaysPage;
