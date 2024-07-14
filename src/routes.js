import React, { lazy } from "react";

const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Recruteur = lazy(() => import("./views/Recruteur/recruteur"));
const Promotion = lazy(() => import("./views/Promotion/Promotion"));
const Dev = lazy(() => import("./views/Dev/dev"));
const Profile = lazy(() => import("./views/Profile/profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/recruteur", name: "Recruteur", element: Recruteur },
  { path: "/promotion", name: "promotion", element: Promotion },
  { path: "/dev", name: "dev", element: Dev },
  { path: "/profile", name: "profile", element: Profile },
];

export default routes;
