import { Link } from "react-router-dom";
import LogoComponent from "./LogoComponent";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-primaryWhite py-4 relative">
      <div className="bg-secondaryBlue h-6 w-full top-0 left-0 absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <LogoComponent isFooter={true} />
        <div className="flex space-x-2 mt-8">
          <Link className="hover:text-accent" to="/about">
            About
          </Link>
          <p>|</p>
          <Link className="hover:text-accent" to="/resources">
            Resources
          </Link>
          <p>|</p>
          <Link className="hover:text-accent" to="/add-resources">
            Add A Resource
          </Link>
          <p>|</p>
          <Link className="hover:text-accent" to="/projects">
            Projects
          </Link>
          <p>|</p>
          <Link className="hover:text-accent" to="/community">
            Community
          </Link>
        </div>
        <div className="flex space-x-4 mt-8">
          <Link className="hover:text-accent" to="https://www.instagram.com">
            @stemconnect
          </Link>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        &copy; {new Date().getFullYear()} Stem Connect. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
