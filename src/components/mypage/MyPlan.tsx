import Image from "next/image";
import myPlanDefaultImage from "/public/mypage/myPlanDefaultImage.jpg";
import MyPageTitle from "./MyPageTitle";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase/supabase";
import { useSessionStore } from "@/store/useSessionStore";
import { TOUR_BASE_AREA } from "@/lib/tour/tour";
import { useFetchTripDataStore } from "@/store/useFetchTripDataStore";
import Router from "next/router";

type RegionDataType = {
  id: Number;
  rnum: number;
  name: string;
  url: string;
};

function MyPlan() {
  const { userSession, setUserSession } = useSessionStore();
  const [userSessionId, setUserSessionId] = useState<string | undefined>();
  const [regionData, setRegionData] = useState<RegionDataType[] | null>(null);
  const [tripPlan, setTripPlan] = useState<RegionDataType[]>();
  const { planData, setPlanData } = useFetchTripDataStore();

  useEffect(() => {
    const fetchingPlanData = async () => {
      const { data, error } = await supabase
        .from("tripplan")
        .select()
        .eq("user_id", userSession?.user.id)
        .order("created_at", { ascending: false });

      setPlanData(data);
      console.log(data);

      if (error) {
        console.error(error);
      }
    };
    fetchingPlanData();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(TOUR_BASE_AREA);
      const json = await response.json();

      const dataWithImages = json.response.body.items.item.map(
        (item: RegionDataType, rnum: number) => ({
          ...item,
          url: `/images/local/local${rnum}.jpg`,
        }),
      );
      setRegionData(dataWithImages);
    })();
  }, []);

  useEffect(() => {
    if (regionData && planData) {
      const findRegion = regionData.filter(
        (item) =>
          item.name ===
          planData?.map((item) => `${item.region_name}`).toString(),
      );
      setTripPlan(findRegion);
    }
  }, [regionData, planData]);

  const handleRoute = (e: React.MouseEvent, id: Number) => {
    Router.push(`/tripedit/${id}`);
  };

  return (
    <div>
      <MyPageTitle text="나의 일정" />
      <div className="grid my-5 sm:grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-3">
        {planData?.map((item, index) => (
          <button
            key={index}
            className="w-100% h-[200px] sm:h-[280px] w-full object-cover rounded-lg"
            onClick={(e) => handleRoute(e, item.id)}
          >
            {tripPlan?.map((item, index) => (
              <Image
                width={100}
                height={100}
                src={item.url}
                alt="Plan Image"
                className="w-100% h-[200px] sm:h-[280px] w-full object-cover rounded-lg"
                key={index}
              />
            ))}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyPlan;
