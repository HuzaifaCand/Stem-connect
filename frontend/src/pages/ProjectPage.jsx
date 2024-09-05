import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { verifyCreator, getProject, addInterest } from "../api/projects";
import ProjectSidebar from "../components/ProjectSidebar";
import { isAuthenticated } from "../App";

const isCreator = async () => {
  const response = await verifyCreator();
  try {
    return response.data.isCreator;
  } catch {
    return false;
  }
};

const ProjectPage = () => {
  const [creatorStatus, setCreatorStatus] = useState(false);

  useEffect(() => {
    (async () => {
      setCreatorStatus(await isCreator());
    })();
  }, []);

  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = useLoaderData();

  return (
    <div className="flex">
      <div className="flex-grow flex flex-col">
        <div className="container m-auto my-2 py-6 px-6">
          <Link
            to="/projects"
            className="text-primaryBlack flex items-center mb-6"
          >
            <FaArrowLeft className="mr-2" /> Back to Project Listings
          </Link>

          <div className="grid grid-cols-1 w-full gap-6">
            <main>
              <div className="bg-primaryBlue p-6 rounded-lg shadow-md text-center md:text-left mr-6">
                <div className="text-accent text-xl mb-3">
                  {project.category}
                </div>
                <h1 className="text-3xl text-primaryWhite font-semibold mb-3">
                  {project.title}
                </h1>
                <div className="mb-2 flex align-middle justify-center md:justify-start">
                  <p className="text-accent">Team Size: {project.teamSize}</p>
                </div>
              </div>

              <div className="bg-primaryBlue p-6 rounded-lg shadow-md mt-6 mr-6">
                <h3 className="text-primaryWhite text-xl font-semibold mb-3">
                  Project Description
                </h3>

                <p className="mb-6 mr-12 text-primaryGray">
                  {project.introduction}
                </p>
                <h3 className="text-primaryWhite text-xl font-semibold mb-3">
                  Project Details
                </h3>

                <p className="mb-6 mr-12 text-primaryGray">{project.details}</p>

                <h3 className="text-primaryWhite text-xl font-semibold mb-3">
                  Why Should You Join?
                </h3>

                <p className="mb-6 mr-12 text-primaryGray">
                  {project.benefits}
                </p>

                <h3 className="text-primaryWhite text-xl font-semibold mb-3">
                  What Are We Looking For In Members
                </h3>

                <p className="mb-6 mr-12 text-primaryGray">
                  {project.memberdesc}
                </p>

                <h3 className="text-primaryWhite text-lg font-semibold mb-2">
                  Estimated Project Duration
                </h3>

                <p className="text-primaryGray mb-6">{project.duration}</p>

                <button className="bg-accent text-primaryWhite hover:bg-secondaryBlue font-semibold py-3 px-4 rounded-lg w-1/3 focus:outline-none focus:shadow-outline mt-4 block">
                  Show Interest
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
      <ProjectSidebar isCreator={creatorStatus} />
    </div>
  );
};

const projectLoader = async ({ params }) => {
  const res = await fetch(`/api/projects/${params.projectId}`);
  const data = await res.json();
  return data;
};

export { isCreator, projectLoader, ProjectPage as default };
