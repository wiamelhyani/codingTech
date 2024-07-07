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
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      {/* )} */}
    </div>
  );
}

export default Promotion;
