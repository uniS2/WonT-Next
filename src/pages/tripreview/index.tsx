import TripReviewFeed from "@/components/tripreview/TripReviewFeed";
import TripReviewLayout from "@/layout/tripreview/layout";

function TripReview() {
  return (
    <TripReviewLayout>
      <div className="flex flex-col gap-5">
        <TripReviewFeed />
        <TripReviewFeed />
        <TripReviewFeed />
      </div>
    </TripReviewLayout>
  );
}

export default TripReview;
