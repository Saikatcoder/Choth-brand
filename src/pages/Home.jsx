import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSheller from "../components/BestSheller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import CategorySection from "../components/CatagorySection";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection/>
      <LatestCollection />
      <BestSheller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
