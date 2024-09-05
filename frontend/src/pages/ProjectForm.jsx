import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProject } from "../api/projects";
import Spinner from "../components/Spinner";

const ProjectForm = ({ projectFormSubmit }) => {
  const [state, setState] = useState({
    title: "",
    category: "",
    teamSize: "",
    details: "",
    duration: "",
    skillsRequired: "",
    benefits: "",
    introduction: "",
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
    const newProject = {
      title: state.title,
      category: state.category,
      teamSize: state.teamSize,
      details: state.details,
      duration: state.duration,
      skillsRequired: state.skillsRequired,
      benefits: state.benefits,
      introduction: state.introduction,
    };
    try {
      const res = await createProject(newProject);
      if (res.status === 201) {
        toast.success(res.data.response);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          "Failed to create project! Please try again."
      );
    } finally {
      setLoading(false);
      navigate(`/projects/${res.data.createdProjectId}`);
    }
  };
  return (
    <>
      <section className="bg-primaryBlue">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          {loading ? (
            <Spinner />
          ) : (
            <form className="mx-16 mb-12" onSubmit={formSubmit}>
              <div>
                <h1 className="text-5xl text-primaryWhite text-center font-semibold mt-12 mb-4">
                  Create Project
                </h1>
                <h3 className="text-2xl text-primaryWhite text-center mb-12">
                  Start Your Initiative Here! Get Your Project Up And Running
                </h3>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-primaryWhite font-semibold mb-2"
                >
                  Project Category *
                </label>
                <select
                  id="category"
                  name="category"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  value={state.category}
                  onChange={handleChange}
                  required
                >
                  <option className="bg-primaryBlue" value="Computer-Science">
                    Computer Science
                  </option>
                  <option className="bg-primaryBlue" value="Research">
                    Research
                  </option>
                  <option className="bg-primaryBlue" value="Robotics-or-AI">
                    Robotics
                  </option>
                  <option className="bg-primaryBlue" value="Community-Service">
                    Community Service
                  </option>
                  <option className="bg-primaryBlue" value="Entrepreneurship">
                    Entrepreneurship
                  </option>
                  <option className="bg-primaryBlue" value="Computer-Science">
                    Computer Science
                  </option>
                  <option className="bg-primaryBlue" value="Physics">
                    Physics
                  </option>
                  <option className="bg-primaryBlue" value="Chemistry">
                    Chemistry
                  </option>
                  <option className="bg-primaryBlue" value="Mathematics">
                    Mathematics
                  </option>
                  <option className="bg-primaryBlue" value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-primaryWhite font-bold mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite mb-2"
                  placeholder="eg. Counselling Chatbot"
                  value={state.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="introduction"
                  className="block text-primaryWhite font-bold mb-2"
                >
                  Brief Overview *
                </label>
                <textarea
                  id="introduction"
                  name="introduction"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  rows="4"
                  placeholder="Add a brief introduction to the project for prospective members to get a good overview"
                  value={state.introduction}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="details"
                  className="block text-primaryWhite font-bold mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  rows="12"
                  placeholder="Add a detailed details of your project and its goals here"
                  value={state.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="skillsRequired"
                  className="block text-primaryWhite font-bold mb-2"
                >
                  What qualities and skills are you looking for in team members?
                  *
                </label>
                <textarea
                  id="skillsRequired"
                  name="skillsRequired"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  rows="6"
                  placeholder="eg. Familiar with Javascript, Creative Designers, Fast Workers"
                  value={state.skillsRequired}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="benefits"
                  className="block text-primaryWhite font-bold mb-2"
                >
                  How will team members benefit from this Project? *
                </label>
                <textarea
                  id="benefits"
                  name="benefits"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  rows="6"
                  placeholder="eg. It is a great chance for anyone in the STEM field to improve their ECAs, produce something truly useful..."
                  value={state.benefits}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-primaryWhite font-bold mb-2"
                >
                  Estimated Project Duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite"
                  value={state.duration}
                  onChange={handleChange}
                  required
                >
                  <option className="bg-primaryBlue" value="Under a Month">
                    Under a Month
                  </option>
                  <option className="bg-primaryBlue" value="1-2 Months">
                    1-2 Months
                  </option>
                  <option className="bg-primaryBlue" value="2-3 Months">
                    2-3 Months
                  </option>
                  <option className="bg-primaryBlue" value="3-4 Months">
                    3-4 Months
                  </option>
                  <option className="bg-primaryBlue" value="4-5 Months">
                    4-5 Months
                  </option>
                  <option className="bg-primaryBlue" value="5-6 Months">
                    5-6 Months
                  </option>
                  <option className="bg-primaryBlue" value="Over 6 Months">
                    Over 6 Months
                  </option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-primaryWhite font-bold mb-2">
                  Estimated Team Size
                </label>
                <input
                  type="text"
                  id="teamSize"
                  name="teamSize"
                  className="border-3px border-accent bg-secondaryBlue bg-opacity-40 w-full py-2 px-3 text-primaryWhite mb-2"
                  placeholder="eg. 4-6 Members"
                  value={state.teamSize}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-accent mt-4 text-primaryWhite rounded-lg font-bold py-2 px-6 w-64"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectForm;
