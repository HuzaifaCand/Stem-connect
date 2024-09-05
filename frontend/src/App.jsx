import { Suspense, lazy } from "react";
import MainLayout from "./layout/MainLayout";
import FixScrollIssue from "./layout/FixScrollIssue";
import { projectLoader } from "./pages/ProjectPage";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import { authenticateUser } from "./api/auth";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const isAuthenticated = async () => {
  try {
    const response = await authenticateUser();
    return response.data.isAuthenticated;
  } catch {
    return false;
  }
};

const About = lazy(() => import("./pages/About"));
const LogIn = lazy(() => import("./pages/LogIn"));
const Register = lazy(() => import("./pages/Register"));
const Resources = lazy(() => import("./pages/Resources"));
const Community = lazy(() => import("./pages/Community"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectForm = lazy(() => import("./pages/ProjectForm"));
const ResourceForm = lazy(() => import("./pages/ResourceForm"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<FixScrollIssue />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/resources"
            element={
              <Suspense fallback={<Spinner />}>
                <Resources />
              </Suspense>
            }
          />
          <Route
            path="/community"
            element={
              <Suspense fallback={<Spinner />}>
                <Community />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Spinner />}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<Spinner />}>
                <Projects />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/add-project"
          element={
            <Suspense fallback={<Spinner />}>
              <ProjectForm />
            </Suspense>
          }
        />
        <Route
          path="/add-resource"
          element={
            <Suspense fallback={<Spinner />}>
              <ResourceForm />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Spinner />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinner />}>
              <LogIn />
            </Suspense>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <Suspense fallback={<Spinner />}>
              <ProjectPage />
            </Suspense>
          }
          loader={projectLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export { isAuthenticated, App as default };
