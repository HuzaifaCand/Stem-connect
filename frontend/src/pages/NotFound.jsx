import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = ({ isUnderConstruction }) => {
  return (
    <section className="text-center py-16 flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow text-6xl mb-4" />
      <h1 className="text-6xl text-primaryBlack font-bold mb-4">
        404 Not Found
      </h1>
      <p className="text-2xl text-secondaryBlack mb-5">
        {isUnderConstruction
          ? "This Page is Under Construction"
          : "This Page does Not Exist"}
      </p>
      <Link
        to="/"
        className="text-primaryWhite bg-secondaryBlue hover:bg-accent rounded-md px-12 py-2 mt-2"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
