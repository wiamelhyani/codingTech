import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axiosInstance from "../../../maxios/axiosInstance";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    motDePasse: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/connexion", formData)
      .then((response) => {
        console.log("Connexion réussie:");
        console.log(response.data.data.token);
        setTimeout(() => {
          localStorage.setItem("token", response.data.data.token);
          console.log(response.data.data.token);
          navigate("/tableauDeBord");
        }, 2000);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);
        setError("Erreur lors de la connexion");
      });
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Connexion</h1>
                    <p className="text-body-secondary">
                      Connectez-vous à votre compte
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        type="username"
                        placeholder="Nom d'utilisateur"
                        autoComplete="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="motDePasse"
                        type="password"
                        placeholder="Mot de passe"
                        value={formData.motDePasse}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          className="px-4 border-0"
                          type="submit"
                          style={{ backgroundColor: "#d42f43", color: "white" }}
                        >
                          Connexion
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Mot de passe oublié ?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Inscription</h2>
                    <p>
                      Rejoignez Coding Tech pour accéder à des formations de
                      qualité et entrer en contact avec des recruteurs cherchant
                      des développeurs talentueux. Améliorez vos compétences et
                      trouvez des opportunités de carrière dès maintenant.
                    </p>
                    <Link to="/register">
                      <CButton
                        className="mt-3 border-0"
                        active
                        tabIndex={-1}
                        style={{ backgroundColor: "#d42f43", color: "white" }}
                      >
                        Inscrivez-vous maintenant !
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
