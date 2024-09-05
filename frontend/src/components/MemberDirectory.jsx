import MemberComponent from "./MemberComponent";

const MemberDirectory = () => {
  return (
    <div className="text-center my-4 py-4">
      <h1 className="text-4xl text-primaryBlack font-bold mb-8">
        STEM Connect Members
      </h1>
      <MemberComponent />
    </div>
  );
};

export default MemberDirectory;
