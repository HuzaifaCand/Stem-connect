import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../api/auth";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    instagram: "",
    email: "",
    bio: "",
    skills: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const newUser = {
      firstName: state.firstName,
      lastName: state.lastName,
      password: state.password,
      email: state.email,
      bio: state.bio,
      instagram: state.instagram,
      skills: state.skills.split(",").map((skill) => skill.trim()),
    };

    try {
      const response = await register(newUser);
      if (response.status === 201) {
        toast.success("User registered successfully!");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to register user!");
    }
  };

  return (
    <section className="flex">
      <Sidebar />
      <div className="m-12 w-2/3">
        <div className="mb-6">
          <h1 className="text-5xl text-primaryBlack font-bold mb-3">
            Register
          </h1>
          <Link
            to="/login"
            className="text-secondaryBlue underline hover:text-accent"
          >
            Already have an Account? Log In
          </Link>
        </div>
        <form onSubmit={formSubmit}>
          <div className="flex justify-between space-x-4 mb-6">
            <div className="w-1/2">
              <label
                htmlFor="firstName"
                className="block text-secondaryBlack font-semibold mb-1"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastName"
                className="block text-secondaryBlack font-semibold mb-1"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full"
                required
              />
            </div>
          </div>
          <div className="flex justify-between space-x-4 mb-6">
            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block text-secondaryBlack font-semibold mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="instagram"
                className="block text-secondaryBlack font-semibold mb-1"
              >
                Instagram ID
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={state.instagram}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full placeholder-primaryBlue placeholder-opacity-75"
                placeholder="Enter Your Instagram ID For Contact (Optional)"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="skills"
              className="text-secondaryBlack block font-semibold mb-1"
            >
              Skills (Separate with Commas)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={state.skills}
              onChange={handleChange}
              className="bg-accent bg-opacity-10 px-3 py-2 w-full placeholder-primaryBlue placeholder-opacity-75"
              placeholder="e.g. 'Web Dev, Copywriting, Research' (Recommended)"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="bio"
              className="text-secondaryBlack block font-semibold mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={state.bio}
              onChange={handleChange}
              rows="8"
              className="bg-accent bg-opacity-10 px-3 py-2 w-full placeholder-primaryBlue placeholder-opacity-75"
              placeholder="Briefly describe yourself. This information will help project creators assess your eligibility for their team (Recommended)"
            />
          </div>
          <div className="flex justify-between space-x-4 mb-6">
            <div className="w-1/2">
              <label
                htmlFor="password"
                className="text-secondaryBlack block font-semibold mb-1"
              >
                Password *
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="confirmPassword"
                className="text-secondaryBlack block font-semibold mb-1"
              >
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
                className="bg-accent bg-opacity-10 px-3 py-2 w-full"
                required
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-secondaryBlue text-primaryWhite rounded-lg font-semibold py-2 px-8 w-1/3"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
