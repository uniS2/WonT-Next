import TripReviewFeed from "@/components/tripreview/TripReviewFeed";
import TripReviewLayout from "@/layout/tripreview/layout";

function TripReview() {
  return (
    <TripReviewLayout>
      <div className="flex flex-col mx-16 gap-5 lg:grid lg:grid-cols-4 lg:mx-16 md:grid-cols-3 md:mx-16 md:grid sm:grid sm:grid-cols-2 sm:mx-16">
        <TripReviewFeed />
        <TripReviewFeed />
        <TripReviewFeed />
      </div>
    </TripReviewLayout>
  );
}

export default TripReview;
