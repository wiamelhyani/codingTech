import React from "react";
import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Dashboard = () => {
  return (
    <div>
      {/* Section Héros */}
      <div
        className="container-fluid p-5 text-white text-center"
        style={{
          background: "linear-gradient(90deg, #d42f43, #2959a7)",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Bienvenue à <span style={{ color: "#d42f43" }}>Coding</span>
          <span style={{ color: "#2959a7" }}>Tech</span>
        </h1>
        <p className="lead">
          Débloquez votre potentiel avec nos cours de technologie à la pointe et
          nos conseils d'experts.
        </p>
        <a href="#" className="btn btn-primary btn-lg mt-4">
          Rejoignez-nous
        </a>
      </div>

      {/* Section Introduction et Carousel */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <div
              className="p-4 mb-4 shadow-sm border-0"
              style={{
                borderRadius: "10px",
                backgroundColor: "rgb(252, 252, 252)",
                textAlign: "center",
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
                technologiques et humaines essentielles dans le domaine du
                coding. Notre offre de formation qualifiante répond à la demande
                en forte croissance du secteur numérique au Maroc. Nous
                proposons des programmes de formation accélérée pour les
                développeurs, en mettant l'accent sur les technologies les plus
                récentes et les meilleures pratiques du marché.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Carousel
              className="shadow-sm border-0"
              style={{ borderRadius: "10px" }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G"
                  alt="Première diapositive"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse2.mm.bing.net/th?id=OIP.ehv-x0dq9MZ4rlmwmSuw6wHaEI&pid=Api&P=0&h=180"
                  alt="Deuxième diapositive"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse1.mm.bing.net/th?id=OIP.3pPJQKaUEdqQUjkWge0M3gAAAA&pid=Api&P=0&h=180"
                  alt="Troisième diapositive"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Section Cours Présentés */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Nos Cours Présentés</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Développement Full-Stack</h5>
                <p className="card-text">
                  Apprenez les technologies front-end et back-end pour devenir
                  un développeur polyvalent.
                </p>
                <a href="#" className="btn btn-primary">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Science des Données & IA</h5>
                <p className="card-text">
                  Plongez dans le monde de l'analyse de données et de
                  l'intelligence artificielle.
                </p>
                <a href="#" className="btn btn-primary">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Design UI/UX</h5>
                <p className="card-text">
                  Maîtrisez les principes de conception d'interfaces utilisateur
                  et d'expérience utilisateur.
                </p>
                <a href="#" className="btn btn-primary">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Témoignages */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Ce que Disent Nos Étudiants</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="card-text">
                  "Coding Tech a changé ma carrière. L'expérience pratique et
                  les instructeurs experts m'ont aidé à obtenir le travail de
                  mes rêves!"
                </p>
                <p className="card-text">
                  <strong>- Sarah B., Développeuse Full-Stack</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="card-text">
                  "Le cours de science des données était complet et pratique. Je
                  me sens bien préparé pour relever des défis réels en matière
                  de données."
                </p>
                <p className="card-text">
                  <strong>- Ahmed K., Data Scientist</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="card-text">
                  "D'excellents instructeurs et une communauté de soutien ont
                  rendu mon expérience d'apprentissage agréable et fructueuse."
                </p>
                <p className="card-text">
                  <strong>- Fatima M., Designer UI/UX</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Statistiques */}
      <div className="container my-4">
        <h2 className="text-center mb-4">Notre Impact</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h3>500+</h3>
            <p>Étudiants formés</p>
          </div>
          <div className="col-md-4">
            <h3>30+</h3>
            <p>Cours offerts</p>
          </div>
          <div className="col-md-4">
            <h3>50+</h3>
            <p>Partenaires industriels</p>
          </div>
        </div>
      </div>

      {/* Section Abonnement à la Newsletter */}
      <div className="container my-4">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
        >
          <h3>Restez informé!</h3>
          <p>
            Abonnez-vous à notre newsletter pour recevoir les dernières
            nouvelles et mises à jour.
          </p>
          <form className="form-inline justify-content-center">
            <input
              type="email"
              className="form-control mr-2"
              placeholder="Entrez votre email"
              style={{ maxWidth: "300px" }}
            />
            <button type="submit" className="btn btn-primary">
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Section Pied de page */}
      <footer
        className="text-center py-4"
        style={{ backgroundColor: "#343a40", color: "#fff" }}
      >
        <p>&copy; 2024 Coding Tech. Tous droits réservés.</p>
        <p>
          Suivez-nous sur
          <a href="#" className="ml-2 text-white">
            Facebook
          </a>
          ,
          <a href="#" className="ml-2 text-white">
            Twitter
          </a>
          , et
          <a href="#" className="ml-2 text-white">
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
