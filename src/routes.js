import React, { lazy } from "react";

const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const Recruteur = lazy(() => import("./views/Recruteur/recruteur"));
const Promotion = lazy(() => import("./views/Promotion/Promotion"));
const Dev = lazy(() => import("./views/Dev/dev"));
const routes = [
  // { path: '/base/offres', name: 'Offres', element: Offres },
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/recruteur", name: "Recruteur", element: Recruteur },
  { path: "/promotion", name: "promotion", element: Promotion },
  { path: "/dev", name: "dev", element: Dev },
  // { path: '/theme/typography/:id?', name: 'Typography', element: Typography },
  // { path: '/base/cards/:id', name: 'Cards', element: Cards},
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups},
  // { path: '/base/creatJobs', name: 'Create Jobs', element: CreatJobs},
  // { path: '/charts', name: 'Charts', element: Charts},
  // { path: '/widgets', name: 'Widgets', element: Widgets },
];

export default routes;
