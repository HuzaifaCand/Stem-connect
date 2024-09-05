import ProjectListing from "./ProjectListing";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ProjectListings = ({ isHome = false }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiUrl = isHome ? "/api/projects?_limit=3" : "/api/projects";
    const fetchProjects = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log("Error fetching projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      className={`${isHome ? "bg-primaryBlue py-16 px-4" : ""} relative`}
    >
      {isHome && (
        <>
          <div className="absolute top-0 left-0 right-0 h-4 bg-secondaryBlue" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-secondaryBlue" />

          <h2 className="text-5xl mb-4 text-center text-primaryWhite font-semibold">
            Recent Projects
          </h2>
          <h3 className="mb-8 text-center text-lg text-primaryWhite">
            Join Ongoing STEM Projects: Produce something Productive and Improve
            Your Extra Curriculars
          </h3>
        </>
      )}
      <div className="container-xl lg:container m-auto">
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => {
              return <ProjectListing key={project.id} project={project} />;
            })}
          </div>
        )}
        {isHome ? (
          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="bg-accent text-primaryWhite text-lg rounded-lg shadow-md font-semibold py-3 px-24"
            >
              View All Projects
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ProjectListings;
