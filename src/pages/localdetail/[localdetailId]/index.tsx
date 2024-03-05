import React, { useEffect, useState } from "react";
import LocalDetailLayout from "@/layout/localdetail/layout";
import Image from "next/image";
import Link from "next/link";
import supabase from "@/lib/supabase/supabase";
import DataProps from "@/types/DataProps";
import { useRouter } from "next/router";

const LocalDetail = () => {
  const router = useRouter();
  const { localdetailId } = router.query;
  const [localData, setLocalData] = useState<DataProps | null>(null);
  const [localImageUrl, setLocalImageUrl] = useState<string>("");
  useEffect(() => {
    if (localdetailId) {
      (async () => {
        const { data, error } = await supabase
          .from("local")
          .select("*")
          .eq("id", localdetailId)
          .single();

        if (data) {
          setLocalData(data);
          setLocalImageUrl(
            `/images/localdetail/localdetail${localdetailId}.jpeg`,
          );
        } else {
          setLocalData(null);
        }
      })();
    }
  }, [localdetailId]);

  return (
    <LocalDetailLayout>
      {localData && (
        <div className="w-[500px] h-auto bg-primary bg-opacity-10 rounded-lg p-[20px]">
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-suitBold">{localData.name}</p>
            <p className="text-slate-500">{localData.engName}</p>
          </div>
          <div className="pt-[10px]">
            <Image src={localImageUrl} alt="서울" width={500} height={100} />
          </div>
          <div className="flex flex-col gap-2 bg-white">
            <p className="font-suitBold text-[20px] pt-[15px]">도시정보</p>
            <p className="text-[14px] pb-[15px]">{localData.info}</p>
            <div className="w-[460] border border-black"></div>

            <div className="pt-[10px] text-[14px] flex flex-col gap-3">
              <ul className="flex gap-1 font-suitBold">
                <li>인기 :</li>
                <li>{localData.faP}﹒</li>
                <li>{localData.faP2}﹒</li>
                <li>{localData.faP3}</li>
              </ul>
              <ul className="flex gap-1 font-suitBold">
                <li>호텔 :</li>
                <li>{localData.faH}﹒</li>
                <li>{localData.faH2}﹒</li>
                <li>{localData.faH3}</li>
              </ul>
              <ul className="flex gap-1 font-suitBold pb-[15px]">
                <li>추천 :</li>
                <li>{localData.faR}﹒</li>
                <li>{localData.faR2}﹒</li>
                <li>{localData.faR3}</li>
              </ul>
            </div>
            <div className="w-[460] border border-black"></div>

            <Link href={"search"}>
              <button
                type="button"
                className="w-[460px] h-[50px] bg-primary flex flex-col items-center justify-center mt-[15px] hover:bg-point"
              >
                <p>인기 장소 찾아보기</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </LocalDetailLayout>
  );
};

export default LocalDetail;
