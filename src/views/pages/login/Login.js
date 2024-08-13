import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    axios
      .post("/rest/auth/login", formData)
      .then((response) => {
        console.log("Login successful:", response.data);

        // Check the structure of response.data
        if (response.data && response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } else {
          console.error("Token not found in response:", response.data);
          setError("Error during login: Token not found");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("Error during login");
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
                        name="email"
                        type="email"
                        placeholder="Nom d'utilisateur"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          className="px-4 border-0"
                          type="submit"
                          style={{ backgroundColor: "#2959a7", color: "white" }}
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
                        style={{ backgroundColor: "#2959a7", color: "white" }}
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
