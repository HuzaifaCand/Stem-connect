import { useState, useEffect } from "react";
import { deleteProject, updateProject } from "../api/projects";
import LogoComponent from "../components/LogoComponent";
import { Link } from "react-router-dom";
const ProjectSidebar = ({
  name,
  instagram,
  hasInstagram,
  email,
  projectId,
  isCreator,
}) => {
  return (
    <aside className="w-1/3 bg-primaryBlue p-4">
      <div className="p-6 mb-6 mt-10 sticky top-6">
        <h3 className="text-primaryWhite text-2xl font-semibold mb-3">
          {isCreator ? "Your Project" : `Project By ${name}`}
        </h3>
        <hr className="border-primaryGray my-4" />
        {hasInstagram ? (
          <>
            <h3 className="text-primaryWhite text-xl">Contact Instagram:</h3>
            <p className="text-accent my-2 bg-primaryBlue p-2">{instagram}</p>
          </>
        ) : (
          ""
        )}
        <h3 className="text-primaryWhite text-xl">Contact Email:</h3>
        <p className="text-accent mb-0 mt-2 bg-primaryBlue p-2">{email}</p>
        <hr className="border-primaryGray my-4"></hr>
        {isCreator ? (
          <h3 className="text-xl text-primaryWhite font-semibold mb-6">
            Manage Project
          </h3>
        ) : (
          ""
        )}
        {isCreator ? (
          <Link
            to="/"
            className="bg-accent text-primaryWhite hover:bg-secondaryBlue text-center font-semibold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-4 block"
          >
            Update Project
          </Link>
        ) : (
          <Link
            to="/add-project"
            className="bg-accent text-primaryWhite hover:bg-secondaryBlue text-center font-semibold py-3 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-4 block"
          >
            Create Your Own Project
          </Link>
        )}
        {isCreator ? (
          <button
            // onClick={() => onDeleteClick(project.id)}
            className="bg-secondaryBlack text-primaryWhite hover:bg-primaryBlack font-semibold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-4 block"
          >
            Delete Project
          </button>
        ) : (
          ""
        )}
        <LogoComponent />
      </div>
    </aside>
  );
};

export default ProjectSidebar;
