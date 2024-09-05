import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectListing = ({ project }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  let overview = project.introduction;

  if (!showFullOverview) {
    overview = overview.substring(0, 90) + "...";
  }

  return (
    <div className="bg-primaryWhite rounded-xl shadow-lg relative">
      <div className="p-4">
        <div className="mb-4">
          <div className="text-primaryBlue font-semibold my-2">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-primaryBlack">
            {project.title}
          </h3>
        </div>
        <div className="text-secondaryBlack mb-5">{overview}</div>

        <button
          onClick={() => setShowFullOverview((prevState) => !prevState)}
          className="text-primaryBlue mb-5 hover:text-accent"
        >
          {showFullOverview ? "Less" : "More"}
        </button>

        <h3 className="text-primaryBlue font-semibold mb-2">Project By Name</h3>

        <div className="border border-secondaryBlack mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">{project.duration}</div>
          <Link
            to={`/projects/${project.id}`}
            className="h-[36px] bg-accent hover:bg-secondaryBlue text-primaryWhite px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
