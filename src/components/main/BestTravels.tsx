import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/lib/supabase/supabase";

interface TravelsProps {
  id: number;
  title: string;
  date: string;
  writer: string;
}

const BestTravels = () => {
  const [travelsData, setTravelsData] = useState<TravelsProps[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("travels").select("*");
      if (data) {
        setTravelsData(data);
      }
    })();
  }, []);

  return (
    <div className=" w-[320px]">
      <div className="flex justify-between border-b-2 items-center my-[26px]">
        <p className="text-[24px] font-bold">Best 여행기</p>
      </div>
      {travelsData &&
        travelsData.map((travel) => (
          <div
            key={travel.id}
            className="border-8 hover:scale-110 transition mb-[20px]"
          >
            <Link href={`/travel/${travel.id}`}>
              <Image
                src="/mypage/myReviewDefaultImage-1.jpg"
                alt={travel.title}
                width={360}
                height={200}
              />
              <div className="pl-[27px] py-[20px] flex flex-col gap-3">
                <p>{travel.title}</p>
                <div className="text-contentMuted flex">
                  <p>{travel.writer}﹒</p>
                  <p>{travel.date}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BestTravels;
