import Image from "next/image";
import myPlanDefaultImage from "/public/mypage/myPlanDefaultImage.jpg";
import MyPageTitle from "./MyPageTitle";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase/supabase";
import { useSessionStore } from "@/store/useSessionStore";

function MyPlan() {
  const { userSession, setUserSession } = useSessionStore();
  const [userSessionId, setUserSessionId] = useState<string | undefined>();
  const [planData, setPlanData] = useState<any[] | null>();

  useEffect(() => {
    const getUserSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      setUserSession(data);
      setUserSessionId(data.session?.user.id);
    };
    getUserSession();
  }, []);

  useEffect(() => {
    const fetchingPlanData = async () => {
      const { data, error } = await supabase
        .from("tripplan")
        .select()
        .eq("user_id", userSessionId)
        .order("created_at", { ascending: false });

      setPlanData(data);

      if (error) {
        console.error(error);
      }
    };
    fetchingPlanData();
  }, []);

  // console.log(planData);

  return (
    <div>
      <MyPageTitle text="나의 일정" />
      <div className="grid my-5 sm:grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-3">
        <div>
          <Image
            src={myPlanDefaultImage}
            alt="Plan Image"
            className="w-100% h-[200px] sm:h-[280px] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default MyPlan;
