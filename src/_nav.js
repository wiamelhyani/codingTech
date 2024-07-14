import React from "react";
import CIcon from "@coreui/icons-react";
import { GiTeacher } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { cilFolder, cilSpeedometer, cilUser } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
import {
  FaChalkboardTeacher,
  FaFileCode,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";
import { MdGroups, MdDashboard } from "react-icons/md";
const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <MdDashboard icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Dev',
    to:'/Dev',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Recruteur",
    to: "/Recruteur",
    icon: <FaBriefcase className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Promotion",
    to: "/Promotion",
    icon: <FaFileCode className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Formateur",
    to: "/Formateur",
    icon: <FaChalkboardTeacher className="nav-icon" />,
  },
  {
    component: CNavTitle,

    name: 'Profile',
    to:'/profile',
    icon: <FaUser className='nav-icon'/>,
  },
  {
    component: CNavTitle,
    name: 'setting',
    to:'/setting',
    icon: <CiSettings  className='nav-icon'/>,
  },
  // {
  //   component: CNavTitle,
  //   name: "Déconnexion",
  //   to: "/Déconnexion",
  //   icon: <CiSettings className="nav-icon" />,
  // },
];

export default _nav;
