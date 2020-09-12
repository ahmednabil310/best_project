import React from "react";
import FirstSection from "../components/header/Header";
import Video from "../components/video/Video";
import SecondSection from "../components/secondSection/SecondSection";
import Content from "../components/content/Content";
import TopSection from "../components/workflowSection/TopSection";
import BottomSection from "../components/workflowSection/BottomSection";
import ReviewsContent from "../components/reviews/ReviewsContent";
import ReviewsCards from "../components/reviews/ReviewsCards";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import LastFooter from "../components/footer/LastFooter";

export const Home = () => {
  return (
    <div>
      <FirstSection />
      <Video />
      <SecondSection />
      <Content />
      <TopSection />
      <BottomSection />
      <ReviewsContent />
      <ReviewsCards />
      <Cta />
      <Footer />
      <LastFooter />
    </div>
  );
};
