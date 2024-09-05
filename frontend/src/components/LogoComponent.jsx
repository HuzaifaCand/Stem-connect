import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const LogoComponent = ({ sidebarSmall = false, isFooter = false }) => {
  return (
    <div className="flex flex-col justify-center mt-4">
      <div className="flex justify-center mt-8">
        <img src={logo} alt="Stem Connect Logo" className="block"></img>
      </div>
      <h1
        className={`${
          sidebarSmall ? "text-3xl" : "text-4xl"
        } text-primaryWhite mt-4 text-center font-semibold`}
      >
        STEM CONNECT
      </h1>
      <h3 className="text-accent text-lg mt-2 text-center">
        {isFooter
          ? "Created By Syed Huzaifa: Student At Cedar College"
          : "Created By Syed Huzaifa"}
      </h3>
    </div>
  );
};

export default LogoComponent;
