import Hero from "../components/Hero";
import ResourceListings from "../components/ResourceListings";

const Resources = ({}) => {
  return (
    <>
      <Hero
        title="STEM Resources"
        subtitle="Find Useful Resources To Aid Your Learning and Projects"
        hasButton={true}
        button="Add Resource"
        buttonLink="/add-resource"
      />
      <ResourceListings />
    </>
  );
};

export default Resources;
