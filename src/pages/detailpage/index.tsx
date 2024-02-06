import DetailPageLayout from "@/layout/detailpage/layout";
import Image from "next/image";
import detailPlaceDefault from "/public/detailpage/detailPlaceDefault.jpg";

function DetailPage() {
  return (
    <DetailPageLayout>
      <section className="mx-auto w-fit">
        <div className="mt-7 flex gap-2 w-fit ">
          <span className="bg-primary py-1 px-4 rounded-3xl text-white font-light">
            용인시
          </span>
          <span className="bg-primary py-1 px-4 rounded-3xl text-white font-light">
            관광지
          </span>
        </div>
        <div className="flex flex-col gap-1 mt-4 w-fit">
          <span className="font-extrabold text-contentSecondary text-4xl ">
            에버랜드
          </span>
          <p className="text-contentMuted font-light ">
            경기도 용인시 처인구 포곡읍 에버랜드로 199(포곡읍){" "}
          </p>
          <Image
            src={detailPlaceDefault}
            alt=""
            className="aspect-square object-fill w-[560px]  mt-5 "
          />

          <table className="w-full mt-5">
            <tbody className="flex flex-col gap-2 ">
              <tr className="flex justify-between text-contentSecondary">
                <th scope="row">문의 및 안내</th>
                <td className="text-contentMuted">031-320-5000</td>
              </tr>
              <tr className="flex justify-between text-contentSecondary">
                <th scope="row">쉬는날</th>
                <td className="text-contentMuted">연중무휴</td>
              </tr>
              <tr className="flex justify-between text-contentSecondary">
                <th scope="row">체험 안내</th>
                <td className="text-contentMuted">
                  어트랙션, 동물원, 퍼레이드 등
                </td>
              </tr>
              <tr className="flex justify-between text-contentSecondary">
                <th scope="row">이용 시간</th>
                <td className="text-contentMuted">
                  ※ 월별 이용시간 홈페이지 참고
                </td>
              </tr>
              <tr className="flex justify-between text-contentSecondary">
                <th scope="row">홈페이지</th>
                <td className="text-contentMuted">http://www.everland.com/</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DetailPageLayout>
  );
}

export default DetailPage;
