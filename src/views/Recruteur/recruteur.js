import React from "react";
import { Navigate } from "react-router-dom";
import AddRec from "./addRecruteur";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Recruteur = () => {
  return (
    <>
      <AddRec />
      <div class="container mt-5 px-2">
        <div class="mb-2 d-flex justify-content-between align-items-center">
          <div class="position-relative">
            <span class="position-absolute search">
              <i class="fa fa-search"></i>
            </span>
            <input
              class="form-control w-100"
              placeholder="Recherche par nom/email..."
            />
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-responsive">
            <thead>
              <tr class="bg-custom">
                <th scope="col" width="20%">
                  Société
                </th>
                <th scope="col" width="10%">
                  Nom
                </th>
                <th scope="col" width="10%">
                  Prenom
                </th>
                <th scope="col" width="20%">
                  Email
                </th>
                <th scope="col" width="20%">
                  Téléphone
                </th>
                <th scope="col" width="20%">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Oct, 21</td>
                <td>
                  <i class="fa fa-check-circle-o green"></i>
                  <span class="ms-1">Paid</span>
                </td>
                <td>Althan Travis</td>
                <td>Wirecard for figma</td>
                <td>
                  <span class="fw-bolder">$0.99</span>{" "}
                  <i class="fa fa-ellipsis-h  ms-2"></i>
                </td>
                <td>
                  <FaEdit
                    style={{
                      color: "yellow",
                      fontSize: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <FaRegTrashAlt style={{ color: "red", fontSize: "30px" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Recruteur;
