import React from "react";
import CIcon from "@coreui/icons-react";
import { GiTeacher } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { cilFolder, cilSpeedometer, cilUser } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: "info",
    //   // text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: "Développeur",
    to: "/Dev",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Recruteur",
    to: "/Recruteur",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Promotion",
    to: "/Promotion",
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Formateur",
    to: "/Formateur",
    icon: <GiTeacher className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Profile",
    to: "/profile",
    icon: <CiSettings className="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: "Déconnexion",
  //   to: "/Déconnexion",
  //   icon: <CiSettings className="nav-icon" />,
  // },
];

export default _nav;
