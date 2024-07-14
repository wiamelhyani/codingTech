import React, { Suspense, useEffect } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSpinner, useColorModes } from "@coreui/react";
import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProtectedRoute from "./protected-route";

// import ProtectedRoute from './maxios/proRoute';
// import CreateJob from './views/base/creatJob/creatJobs';

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Recruteur = React.lazy(() => import("./views/Recruteur/recruteur"));
const Promotion = React.lazy(() => import("./views/Promotion/Promotion"));
const Dev = React.lazy(() => import("./views/Dev/dev"));
const Profile = React.lazy(() => import("./views/Profile/profile"));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    const theme =
      urlParams.get("theme") &&
      urlParams.get("theme").match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, [isColorModeSet, setColorMode, storedTheme]);

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route path="/register" name="Register Page" element={<Register />} />
          <Route path="/404" name="Page 404" element={<Page404 />} />
          <Route path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DefaultLayout />}>
              <Route path="/recruteur" element={<Recruteur />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/dev" element={<Dev />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
