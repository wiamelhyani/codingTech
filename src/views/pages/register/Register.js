import React, { useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilPhone, cilCalendar } from "@coreui/icons";
import axios from "../../../api/axios";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    motDePasse: "",
    confirmationMotDePasse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/inscription", formData)
      .then((response) => {
        console.log("Données envoyées avec succès:", response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la création du compte:", error);
      });
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Inscription</h1>
                  <p className="text-body-secondary">Créez votre compte</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <CInputGroup className="mb-3" style={{ flex: "0 0 48%" }}>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="nom"
                        placeholder="Nom"
                        autoComplete="nom"
                        value={formData.nom}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3" style={{ flex: "0 0 48%" }}>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="prenom"
                        placeholder="Prenom"
                        autoComplete="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <CInputGroup className="mb-3" style={{ flex: "0 0 48%" }}>
                      <CInputGroupText>
                        <CIcon icon={cilCalendar} />
                      </CInputGroupText>
                      <CFormInput
                        name="date_naissance"
                        type="date"
                        placeholder="Date de naissance"
                        value={formData.date_naissance}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3" style={{ flex: "0 0 48%" }}>
                      <CInputGroupText>
                        <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput
                        name="telephone"
                        type="numérique"
                        placeholder="Téléphone "
                        value={formData.telephone}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="username"
                      placeholder="Nom d'utilisateur"
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                      autoComplete="new-password"
                      value={formData.motDePasse}
                      onChange={handleChange}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton
                      style={{ backgroundColor: "#2959a7", color: "white" }}
                      type="submit"
                    >
                      Créer un compte
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Inscription;
