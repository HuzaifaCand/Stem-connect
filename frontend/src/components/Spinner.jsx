import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = () => {
  return <ClipLoader color="#4338ca" cssOverride={override} size={100} />;
};

export default Spinner;
