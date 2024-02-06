import Image from "next/image";
import detailPlaceDefault from "/public/detailpage/detailPlaceDefault.jpg";
import TripReviewDetailLayout from "@/layout/tripreviewdetail/layout";

function index() {
  return (
    <TripReviewDetailLayout>
      <div>
        {" "}
        <Image
          src={detailPlaceDefault}
          alt=""
          className="aspect-square object-fill w-[560px]  mt-5 "
        />
      </div>
    </TripReviewDetailLayout>
  );
}

export default index;
