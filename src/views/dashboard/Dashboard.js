import React from "react";
import classNames from "classnames";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {} from "@coreui/icons";

import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Import the default styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Carousel from "react-bootstrap/Carousel"; // Import Bootstrap Carousel

const Dashboard = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row">
          <div
            className="col-md-6 border-0"
            style={{
              border: "2px solid ",
              borderRadius: "10px",
              backgroundColor: "#e7fafd",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "15px",
            }}
          >
            <p>
              Coding Tech est une académie digitale créée pour former les jeunes
              diplômés et les chercheurs d'emploi aux métiers de l'avenir. Nous
              offrons un accompagnement rigoureux pour leur permettre d'acquérir
              les compétences technologiques et humaines essentielles dans le
              domaine du coding. Notre offre de formation qualifiante répond à
              la demande en forte croissance du secteur numérique au Maroc. Nous
              proposons des programmes de formation accélérée pour les
              développeurs, en mettant l'accent sur les technologies les plus
              récentes et les meilleures pratiques du marché.
            </p>
          </div>
          <div className="col-md-6 border-0">
            <Carousel
              className="border-0"
              style={{
                border: "2px solid ",
                borderRadius: "10px",
                backgroundColor: "#e7fafd",
              }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse3.mm.bing.net/th?id=OIP.lT2MFAkuTPhZW__tqbkF1wHaEo&pid=Api&P=0&h=180"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse4.mm.bing.net/th?id=OIP.at_od0TBIObfe2ffQ2NK4QHaEN&pid=Api&P=0&h=180"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse3.mm.bing.net/th?id=OIP.lT2MFAkuTPhZW__tqbkF1wHaEo&pid=Api&P=0&h=180"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Calendar
        className="border-0"
        style={{
          border: "2px solid ",
          borderRadius: "10px",
          height: "60vh",
          backgroundColor: "#e7fafd",
        }}
      />
    </div>
  );
};

export default Dashboard;
