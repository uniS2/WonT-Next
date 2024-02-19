import TripReviewFeed from "@/components/tripreview/TripReviewFeed";
import TripReviewLayout from "@/layout/tripreview/layout";

function TripReview() {
  return (
    <TripReviewLayout>
      <div className="flex flex-col  mx-auto gap-5 lg:grid lg:grid-cols-3 lg:mx-16">
        <TripReviewFeed />
        <TripReviewFeed />
        <TripReviewFeed />
      </div>
    </TripReviewLayout>
  );
}

export default TripReview;
