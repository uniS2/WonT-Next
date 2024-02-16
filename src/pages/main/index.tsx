import React from "react";
import MainLayout from "@/layout/main/layout";
import MakePlan from "@/components/main/MakePlan";
import RecommandRegion from "@/components/main/RecommandRegion";
import BestTravels from "@/components/main/BestTravels";

function MainPage() {
  return (
    <MainLayout>
      <MakePlan />
      <RecommandRegion />
      <BestTravels />
    </MainLayout>
  );
}
export default MainPage;
