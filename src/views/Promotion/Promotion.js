import { React, useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
function Promotion() {
  const [loadin, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="d-flex flex-row ">
      {/* {loadin ? (
        <div>
          <Skeleton circle height={40} width={40} />
          <Skeleton count={2} height={30} width={100} />
        </div>
      ) : ( */}
      <MDBCard className="w-25 me-5">
        <MDBCardImage
          className="w-7 "
          src="https://www.coding-tech.fr/_astro/langchain-pour-pilote-vos-llm.Bxpp5O6b_Z2aaV0D.webp"
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle style={{ color: "blue" }}>
            LangChain pour piloter vos LLM
          </MDBCardTitle>
          <div>
            <p>Du01/01/2023 au30/03/2023</p>
            <button class="btn btn-success rounded-pill">Javascript</button>
          </div>
          <MDBCardText>
            Dans cette promotion nous allons decouvrir la nouveauté la plus
            importante de Javascript.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="w-25 me-5">
        <MDBCardImage
          className="w-7 "
          src="https://www.coding-tech.fr/_astro/react-19-new-features.BOVvEM2j_Z26n78R.webp"
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle style={{ color: "blue" }}>
            React 19 nouveautés et fonctionnalités
          </MDBCardTitle>
          <div>
            <p>Du01/01/2023 au30/03/2023</p>
            <button class="btn btn-dark rounded-pill">ReactJs</button>
          </div>
          <MDBCardText>
            Dans cette promotion nous allons decouvrir la nouveauté la plus
            importante de ReactJs.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      <MDBCard className="w-25 me-5">
        <MDBCardImage
          className="w-7 "
          src="https://www.coding-tech.fr/_astro/typescript-5-5-amelioration-inference-type.DkyUWOfz_Z26KocL.webp"
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle style={{ color: "blue" }}>
            Typescript 5.5 Amélioration de l'inférence de type
          </MDBCardTitle>
          <div>
            <p>Du01/01/2023 au30/03/2023</p>
            <button class="btn btn-primary rounded-pill">Typescript</button>
          </div>
          <MDBCardText>
            Dans cette promotion nous allons decouvrir la nouveauté la plus
            importante de Typescript.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      {/* )} */}
    </div>
  );
}

export default Promotion;
