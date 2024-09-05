import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ProjectListings from "../components/ProjectListings";
import WhyJoinComponent from "../components/WhyJoinComponent";

const Home = () => {
  return (
    <>
      <Hero
        title="STEM Collaboration Made Possible"
        subtitle="Network Like Never Before: Collaborate on STEM Projects and Access Valuable Resources"
        isHome={true}
      />
      <HomeCards />
      <ProjectListings isHome={true} />
      <WhyJoinComponent />
    </>
  );
};

export default Home;
