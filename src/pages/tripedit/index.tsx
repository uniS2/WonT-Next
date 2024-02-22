import SaveButton from "@/components/tripedit/SaveButton";
import TripDays from "@/components/tripedit/TripDays";
import TripEditMap from "@/components/tripedit/TripEditMap";
import TripEditLayout from "@/layout/tripedit/layout";

function TripEdit() {
  const tripDate = new Date();
  console.log(tripDate);

  const testTripPlan = ["새별오름", "성산일출봉", "카멜리아 힐"];

  return (
    <TripEditLayout>
      <div>
        <TripEditMap />
        <div className="w-full h-[80px] bg-contentSecondary flex justify-between items-center px-5">
          <div className="flex flex-col">
            <span className="text-white">제주</span>
            <span className="text-white">24.01.20 - 24.01.22</span>
          </div>
          <button className="border-[1px] w-[56px] h-7 rounded-md border-contentMuted text-contentMuted text-sm">
            수정
          </button>
        </div>
        <section>
          <div className="mt-7 mb-10">
            <TripDays
              days="Day 1"
              date="24.01.20"
              testTripPlan={testTripPlan}
            />
            <TripDays days="Day 2" date="24.01.21" />
            <TripDays days="Day 3" date="24.01.22" />
            <TripDays days="Day 4" date="24.01.23" />
            <SaveButton />
          </div>
        </section>
      </div>
    </TripEditLayout>
  );
}

export default TripEdit;
