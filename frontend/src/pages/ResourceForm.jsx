import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createResource } from "../api/resources";
import Spinner from "../components/Spinner";

const ResourceForm = () => {
  const [state, setState] = useState({
    resourceDescription: "",
    resourceCategory: "",
    resourceLink: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newResource = {
      resourceDescription: state.resourceDescription,
      resourceCategory: state.resourceCategory,
      resourceLink: state.resourceLink,
    };

    try {
      const res = await createResource(newResource);
      if (res.status == 201) {
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Failed to add Resource! Please try again."
      );
    } finally {
      setLoading(false);
      navigate("/resouces");
    }
  };

  return (
    <section className="min-h-screen bg-primaryBlue">
      <div className="px-6 py-8 mb-4 m-4 md:m-0">
        {loading ? (
          <Spinner />
        ) : (
          <form className="mx-16" onSubmit={formSubmit}>
            <div className="text-center">
              <h1 className="text-5xl text-primaryWhite font-semibold mt-12 mb-4">
                Add Resource
              </h1>
              <h3 className="text-xl text-primaryWhite mb-12">
                Contribute to the Community by Sharing Educational Material Or
                Useful Tools!
              </h3>
            </div>
            <div className="mb-4">
              <label
                htmlFor="resourceDescription"
                className="block text-primaryWhite font-semibold mb-2"
              >
                Resource Description
              </label>
              <input
                type="text"
                id="resourceDescription"
                name="resourceDescription"
                value={state.resourceDescription}
                placeholder="eg. Tool to Convert Designs to HTML"
                onChange={handleChange}
                className="bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resourceCategory"
                className="block text-primaryWhite font-semibold mb-2"
              >
                Category
              </label>
              <select
                id="resourceCategory"
                name="resourceCategory"
                className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                value={state.resourceCategory}
                onChange={handleChange}
                required
              >
                <option className="bg-primaryBlue" value="Tool">
                  Tool
                </option>
                <option className="bg-primaryBlue" value="Course">
                  Course
                </option>
                <option className="bg-primaryBlue" value="Article">
                  Article
                </option>
                <option className="bg-primaryBlue" value="Educational-Video">
                  Educational Video
                </option>
                <option className="bg-primaryBlue" value="Tutorial">
                  Tutorial
                </option>
                <option className="bg-primaryBlue" value="Productivity">
                  Productivity
                </option>
                <option className="bg-primaryBlue" value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="resourceLink"
                className="block text-primaryWhite font-semibold mb-2"
              >
                Link
              </label>
              <input
                type="url"
                id="resourceLink"
                name="resourceLink"
                value={state.resourceLink}
                placeholder="Paste Link to the Resource Here"
                onChange={handleChange}
                className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                required
              />
            </div>
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="bg-accent text-primaryWhite rounded-lg font-semibold py-3 px-12"
              >
                Submit Resource
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ResourceForm;
