import React from "react";
import CIcon from "@coreui/icons-react";
import { GiTeacher } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { cilFolder, cilSpeedometer, cilUser } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
import { FaChalkboardTeacher, FaFileCode, FaBriefcase } from "react-icons/fa";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

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
    icon: <GroupsRoundedIcon className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Recruteur",
    to: "/Recruteur",
    icon: <FaBriefcase className="nav-icon" />,
    // =======
    //     name: 'Recruteur',
    //     to:'/recruteur',
    //     icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
    // >>>>>>> 646323563949cb54703ba929963ef7c048ae480c
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
