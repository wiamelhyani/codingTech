import React from "react";

function AddRec() {
  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter recruteur
      </button>

      {/* Modal structure */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajouter Dev
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="text-dark-emphasis">
                <div className="mb-3 d-flex align-items-center">
                  <label className="me-2">Société</label>
                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center">
                  <label className="me-2">Nom</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label me-2"
                  >
                    Email
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3 d-flex align-items-center">
                  <label className="me-2">Téléphone</label>
                  <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRec;
