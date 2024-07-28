import { CBadge } from "@coreui/react";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import AddRec from "./addRecruteur";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Rec = () => {
  function Bb() {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  }

  return (
    <div>
      <div>
        <CBadge color="success">
          <AddRec />
        </CBadge>
        <div class="container mt-5 px-2">
          <div class="mb-2 d-flex justify-content-between align-items-center">
            <div class="position-relative">
              <span class="position-absolute search">
                <i class="fa fa-search"></i>
              </span>
              <input
                class="form-control w-100"
                placeholder="Search by order#, name..."
              />
            </div>

            <div class="px-2">
              <span>
                Filters <i class="fa fa-angle-down"></i>
              </span>
              <i class="fa fa-ellipsis-h ms-3"></i>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-responsive">
              <thead>
                <tr class="bg-light">
                  <th scope="col" width="20%">
                    Société
                  </th>
                  <th scope="col" width="20%">
                    Nom
                  </th>
                  <th scope="col" width="20%">
                    Email
                  </th>
                  <th scope="col" width="20%">
                    Téléphone
                  </th>
                  <th scope="col" width="20%">
                    Editer
                  </th>
                  <th scope="col" width="20%">
                    Supprimer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://tse2.mm.bing.net/th?id=OIP.DA8FBCaBvcANLGxl2R_dJwHaEq&pid=Api&P=0&h=180"
                      width="40"
                    />
                  </td>
                  <td>Capgimini</td>
                  <td>
                    <span class="fw-bolder">althan@gmailcomcom</span>{" "}
                    <i class="fa fa-ellipsis-h  ms-2"></i>
                  </td>
                  <td>0512365897</td>
                  <td>
                    <GrEdit color="cyan" size={30} />
                  </td>
                  <td>
                    <MdDelete color="purple" size={40} onClick={Bb} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQEqGjNe870AFA/company-logo_200_200/0/1674127443464/peaqock_financials_logo?e=1729728000&v=beta&t=bTI-i-aPHkSJ331n8pWrnAtq93EW1fz_J5lfJ_wY1bM"
                      width="40"
                    />
                  </td>
                  <td>Peaqock</td>

                  <td>
                    <span class="fw-bolder">althan@gmailcomcom</span>{" "}
                    <i class="fa fa-ellipsis-h  ms-2"></i>
                  </td>
                  <td>0512365897</td>
                  <td>
                    <GrEdit color="cyan" size={30} />
                  </td>
                  <td>
                    <MdDelete color="purple" size={40} onClick={Bb} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="https://media.licdn.com/dms/image/C4D0BAQHI1hJSDPKhUQ/company-logo_200_200/0/1641288538540/viseo_logo?e=1729728000&v=beta&t=zR7wBhXE851zTHSmGPxhDRkyYWJMCQc6SXPZOnRIbb4"
                      width="40"
                    />
                  </td>
                  <td>Viseo</td>

                  <td>
                    <span class="fw-bolder">althan@gmailcomcom</span>{" "}
                    <i class="fa fa-ellipsis-h  ms-2"></i>
                  </td>
                  <td>0512365897</td>
                  <td>
                    <GrEdit color="cyan" size={30} />
                  </td>
                  <td>
                    <MdDelete color="purple" size={40} onClick={Bb} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rec;
