import { Link } from "react-router-dom";

const MemberComponent = () => {
  return (
    <div className="bg-accent bg-opacity-10 py-4 px-6 border-t border-b border-secondaryBlue flex justify-between items-center mx-32">
      <h3 className="text-primaryBlue font-semibold text-xl">Name | Bio </h3>
      <Link
        to="/"
        className="bg-primaryBlue text-primaryWhite py-2 px-8 rounded-lg hover:bg-accent"
      >
        View Profile
      </Link>
    </div>
  );
};

export default MemberComponent;
