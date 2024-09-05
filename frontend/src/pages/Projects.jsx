import ProjectListings from "../components/ProjectListings";
import Hero from "../components/Hero";
const Projects = () => {
  return (
    <>
      <Hero
        title="Browse STEM Projects"
        subtitle="Improve Your Extra Curriculars: Join Ongoing Projects or Create Your Own "
        hasButton={true}
        button="Create Project"
        buttonLink="/add-project"
      />
      <section className="px-4 py-6">
        <ProjectListings />
      </section>
    </>
  );
};

export default Projects;
