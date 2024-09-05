import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import { toast } from "react-toastify";

const LogIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
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

    const user = {
      email: state.email,
      password: state.password,
    };

    try {
      const response = await login(user);
      if (response.status === 200) {
        toast.success("Successfully Logged In!");
        navigate("/");
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (error) {
      toast.error("Failed to Login!");
    }
  };
  return (
    <section className="flex">
      <Sidebar />
      <div className="m-12 w-2/3">
        <div className="mb-6">
          <h1 className="text-5xl text-primaryBlack font-bold mb-3">Log In</h1>
          <Link
            to="/register"
            className="text-secondaryBlue underline hover:text-accent"
          >
            Don't have an Account? Register
          </Link>
        </div>
        <form onSubmit={formSubmit}>
          <div className="mb-6">
            <label className="block text-secondaryBlack font-semibold mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              className="bg-accent bg-opacity-10 px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-secondaryBlack font-semibold mb-1">
              Password:
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
          <div className="mt-12">
            <button
              type="submit"
              className="bg-secondaryBlue text-primaryWhite rounded-lg font-semibold py-2 px-8 w-1/3"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
