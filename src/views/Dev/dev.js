import React, { useEffect, useState } from "react";
import { CBadge } from "@coreui/react";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import AddDev from "./addDev";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "../../api/axios";

const Dev = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      try {
        const response = await axios.get("/developers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDevelopers(response.data);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    fetchDevelopers();
  }, []);

  function Bb() {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  }

  return (
    <div>
      <div>
        <CBadge color="success">
          <AddDev />
        </CBadge>
        <div className="container mt-5 px-2">
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div className="position-relative">
              <span className="position-absolute search">
                <i className="fa fa-search"></i>
              </span>
              <input
                className="form-control w-100"
                placeholder="Search by order#, name..."
              />
            </div>

            <div className="px-2">
              <span>
                Filters <i className="fa fa-angle-down"></i>
              </span>
              <i className="fa fa-ellipsis-h ms-3"></i>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-responsive">
              <thead>
                <tr className="bg-light">
                  <th scope="col" width="20%">
                    Photo
                  </th>
                  <th scope="col" width="20%">
                    Nom
                  </th>
                  <th scope="col" width="20%">
                    Prenom
                  </th>
                  <th scope="col" width="20%">
                    Email
                  </th>
                  <th scope="col" width="20%">
                    Editer
                  </th>
                  <th scope="col" width="20%">
                    Supprimer
                  </th>
                </tr>
              </thead>
              <tbody>
                {developers.map((dev) => (
                  <tr key={dev.id}>
                    <td>
                      <img
                        src={dev.imageURL}
                        width="30"
                        alt={`${dev.nom} ${dev.prenom}`}
                      />
                    </td>
                    <td>{dev.nom}</td>
                    <td>{dev.prenom}</td>
                    <td>
                      <span className="fw-bolder">{dev.email}</span>
                      <i className="fa fa-ellipsis-h ms-2"></i>
                    </td>
                    <td>
                      <GrEdit color="cyan" size={30} />
                    </td>
                    <td>
                      <MdDelete color="purple" size={40} onClick={Bb} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
