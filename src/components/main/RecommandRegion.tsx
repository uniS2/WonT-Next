import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TOUR_BASE_AREA } from "@/lib/tour/tour";
import Image from "next/image";

type RegionDataType = {
  rnum: number;
  code: string;
  name: string;
  url: string;
};

const RecommandRegion = () => {
  const [regionData, setRegionData] = useState<RegionDataType[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(TOUR_BASE_AREA);
      const json = await response.json();

      const dataWithImages = json.response.body.items.item.map(
        (item: RegionDataType, key: number) => ({
          ...item,
          url: `/images/local${key}.jpg`,
        }),
      );
      setRegionData(dataWithImages);
    })();
  }, []);

  return (
    <div className=" w-[320px] h-[600px] overflow-auto">
      <div className="flex justify-between border-b-2 items-center my-[26px]">
        <p className="text-[24px] font-bold">국내 여행지</p>
        <Link href={"/search"}>
          <IoSearch size={20} />
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-6">
        {regionData?.map((region: RegionDataType) => {
          return (
            <div
              key={region.rnum}
              className="relative rounded-md h-[138px] w-[138px] overflow-hidden"
              style={{
                backgroundImage: `url(${region.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center text-white text-xl rounded-md opacity-0 hover:opacity-100 transition-opacity">
                {region.name}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommandRegion;
