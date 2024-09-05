import LogoComponent from "./LogoComponent";

const Sidebar = ({ width = "w-1/3", isSmall = false }) => {
  return (
    <aside
      className={`${width} bg-primaryBlue p-4 flex items-center justify-center min-h-screen`}
    >
      <div className="p-6 sticky top-1/2 transform -translate-y-1/2">
        <LogoComponent sidebarSmall={isSmall} />
      </div>
    </aside>
  );
};

export default Sidebar;
