import TripReviewFeed from "@/components/tripreview/TripReviewFeed";
import TripReviewLayout from "@/layout/tripreview/layout";
import supabase from "@/lib/supabase/supabase";
import { useReviewStore } from "@/store/useReviewStore";
import { ReviewDataTypes } from "@/types/ReviewDataTypes";
import { useEffect, useState } from "react";

function TripReview() {
  const [review, setReview] = useState<any[] | null>();
  const { reviewData, setReviewData } = useReviewStore();

  useEffect(() => {
    const fetchingReviewData = async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select()
        .order("created_at", { ascending: false });
      console.log(data);
      setReview(data);
      if (error) {
        console.error(error);
      }
    };

    fetchingReviewData();
    console.log(review);
  }, [setReview]);

  return (
    <TripReviewLayout>
      <div>
        {/* <button className=" px-6 py-2 bg-primary text-white cursor-pointer w-8 h-5 rounded-md">
          리뷰 작성
        </button> */}
        <div className="flex flex-col mx-16 gap-5 lg:grid lg:grid-cols-4 lg:mx-16 md:grid-cols-3 md:mx-16 md:grid sm:grid sm:grid-cols-2 sm:mx-16">
          {review?.map((item) => <TripReviewFeed reviewData={item} />)}
        </div>
      </div>
    </TripReviewLayout>
  );
}

export default TripReview;
