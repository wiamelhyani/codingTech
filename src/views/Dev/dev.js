import React, { useEffect, useState } from "react";
import { CBadge } from "@coreui/react";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import AddDev from "./addDev";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Dev = () => {
  const [developers, setDevelopers] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [isAddDevModalOpen, setIsAddDevModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get("/developers")
      .then((response) => {
        setDevelopers(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error("Error fetching developers:", error);
      });
  }, []);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirmer la soumission",
      message: "Êtes-vous sûr de vouloir faire cela ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => {
            axios
              .delete(`/developers/${id}`)
              .then((response) => {
                setDevelopers(developers.filter((dev) => dev.id !== id));
                console.log("Supprimé avec succès");
              })
              .catch((error) => {
                console.error(
                  "Erreur lors de la suppression du développeur :",
                  error
                );
              });
          },
        },
        {
          label: "Non",
          onClick: () => alert("Cliquez sur Non"),
        },
      ],
    });
  };

  const handleEdit = (developer) => {
    setSelectedDeveloper(developer);
    setIsAddDevModalOpen(true);
  };

  const handleAddDevClose = () => {
    setSelectedDeveloper(null);
    setIsAddDevModalOpen(false);
  };

  const handleViewProfile = (developer) => {
    navigate("/profile", { state: { developer } }); // Navigate to Profile with developer data
  };

  return (
    <div>
      <div>
        <CBadge
          color="success"
          onClick={() => setIsAddDevModalOpen(true)}
          style={{
            padding: "10px 20px",
            width: "250px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Ajouter Développeur
        </CBadge>
        {isAddDevModalOpen && (
          <AddDev
            developer={selectedDeveloper}
            onClose={handleAddDevClose}
            setDevelopers={setDevelopers}
          />
        )}
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
                    Description
                  </th>
                  <th scope="col" width="20%">
                    Email
                  </th>
                  <th scope="col" width="20%">
                    Telephone
                  </th>
                  <th scope="col" width="20%">
                    Editer
                  </th>
                  <th scope="col" width="20%">
                    Supprimer
                  </th>
                  <th scope="col" width="20%">
                    Voir Profil
                  </th>
                </tr>
              </thead>
              <tbody>
                {developers.map((dev) => (
                  <tr key={dev.id}>
                    <td>
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&pid=Api&P=0&h=180"
                        width="30"
                        alt="img"
                      />
                    </td>
                    <td>
                      {dev.nom} {dev.prenom}
                    </td>
                    <td>{dev.description}</td>
                    <td>
                      <span className="fw-bolder">{dev.email}</span>
                      <i className="fa fa-ellipsis-h ms-2"></i>
                    </td>
                    <td>
                      <span className="fw-bolder">{dev.telephone}</span>
                      <i className="fa fa-ellipsis-h ms-2"></i>
                    </td>
                    <td>
                      <GrEdit
                        color="cyan"
                        size={30}
                        onClick={() => handleEdit(dev)}
                      />
                    </td>
                    <td>
                      <MdDelete
                        color="purple"
                        size={40}
                        onClick={() => handleDelete(dev.id)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => handleViewProfile(dev)}
                      >
                        Voir
                      </button>
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
