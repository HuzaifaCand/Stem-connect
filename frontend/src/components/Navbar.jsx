import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../App";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      setLoggedIn(await isAuthenticated());
    })();
  }, []);

  const linkClass = ({ isActive }) => {
    if (isActive) {
      return "text-accent hover:text-primaryWhite px-3 py-2";
    } else {
      return "text-primaryWhite hover:text-accent px-3 py-2";
    }
  };
  return (
    <nav className="bg-navbarBlue">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={Logo} alt="STEM Connect" />
              <span className="hidden md:block text-primaryWhite hover:text-accent text-2xl font-bold ml-2">
                STEM Connect
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/about" className={linkClass}>
                  About
                </NavLink>
                <NavLink to="/community" className={linkClass}>
                  Community
                </NavLink>
                <NavLink to="/projects" className={linkClass}>
                  Projects
                </NavLink>
                <NavLink to="/resources" className={linkClass}>
                  Resources
                </NavLink>
                {loggedIn ? (
                  <NavLink
                    to="/dashboard"
                    className="text-primaryWhite bg-accent rounded-lg font-semibold px-5 py-2 hover:bg-secondaryBlue"
                  >
                    Your Profile
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className="text-primaryWhite bg-accent rounded-lg font-semibold px-5 py-2 hover:bg-secondaryBlue"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
