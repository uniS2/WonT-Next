import MapPin from "@/components/tripedit/MapPin";
import TripEditMap from "@/components/tripedit/TripEditMap";
import TripEditLayout from "@/layout/tripedit/layout";
import { AiFillPlusCircle } from "react-icons/ai";

function TripEdit() {
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
          <div>
            <ul className="">
              <p className="bg-secondary  h-14 flex items-center px-5 gap-2 font-semibold">
                Day1{" "}
                <span className="font-light text-contentMuted">| 24.01.20</span>
              </p>
              <li className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5">
                <span className="flex items-center gap-2">
                  <MapPin />
                  장소를 추가해주세요.
                </span>
                <button className="">
                  <AiFillPlusCircle size="28px" color="#828282" />
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </TripEditLayout>
  );
}

export default TripEdit;
