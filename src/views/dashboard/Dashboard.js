import React from "react";
import {} from "@coreui/icons";

import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

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
              backgroundColor: "rgb(252 252 252)",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "15px",
              fontWeight: "bold",
              lineHeight: "2",
            }}
          >
            <p>
              <span style={{ color: "#d42f43" }}>Coding</span>
              <span style={{ color: "#2959a7" }}>Tech</span> est une académie
              digitale créée pour former les jeunes diplômés et les chercheurs
              d'emploi aux métiers de l'avenir. Nous offrons un accompagnement
              rigoureux pour leur permettre d'acquérir les compétences
              technologiques et humaines essentielles dans le domaine du coding.
              Notre offre de formation qualifiante répond à la demande en forte
              croissance du secteur numérique au Maroc. Nous proposons des
              programmes de formation accélérée pour les développeurs, en
              mettant l'accent sur les technologies les plus récentes et les
              meilleures pratiques du marché.
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
                  src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse2.mm.bing.net/th?id=OIP.ehv-x0dq9MZ4rlmwmSuw6wHaEI&pid=Api&P=0&h=180"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse1.mm.bing.net/th?id=OIP.3pPJQKaUEdqQUjkWge0M3gAAAA&pid=Api&P=0&h=180"
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
          backgroundColor: "rgb(252 252 252)",
        }}
      />
    </div>
  );
};

export default Dashboard;
