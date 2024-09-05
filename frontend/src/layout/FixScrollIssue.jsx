import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const FixScrollIssue = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default FixScrollIssue;
