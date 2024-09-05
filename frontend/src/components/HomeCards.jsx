import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl text-primaryBlack font-bold">
              Find STEM Resources
            </h2>
            <p className="mt-2 text-primaryBlack mb-4">
              Find Useful Resources To Aid Your Learning And Projects
            </p>
            <Link
              to="/resources"
              className="inline-block bg-primaryBlue text-primaryWhite rounded-lg px-6 py-2 hover:bg-accent"
            >
              View Resources
            </Link>
          </Card>
          <Card bg="bg-primaryGray">
            <h2 className="text-2xl text-primaryBlack font-bold">
              Pitch A Project
            </h2>
            <p className="mt-2 text-primaryBlack mb-4">
              Get Your Initiative Up And Running And Build The Perfect Team
            </p>
            <Link
              to="/add-project"
              className="inline-block bg-accent text-primaryWhite rounded-lg px-6 py-2 hover:bg-primaryBlue"
            >
              Create Project
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
