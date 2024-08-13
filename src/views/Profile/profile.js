import React, { useState, useEffect, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { useLocation } from "react-router-dom";
import pdf from "../Profile/cv.pdf"; // Adjust path as necessary

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs";

function Profile() {
  const location = useLocation();
  const { developer } = location.state || {};
  const [select, setSelect] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(0);
  const pdfWrapperRef = useRef(null);

  const handleVal = (e) => {
    setSelect(e.target.value);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  useEffect(() => {
    if (pdfWrapperRef.current) {
      setPdfWidth(pdfWrapperRef.current.clientWidth);
    }
  }, [showPdf, pdfWrapperRef.current]);

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-lg-9">
          <div className="card shadow-sm border-primary">
            <div className="card-body">
              <form className="form">
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="fname"
                        className="form-label text-primary"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="form-control border-primary"
                        value={developer?.prenom || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="lname"
                        className="form-label text-primary"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="form-control border-primary"
                        value={developer?.nom || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label text-primary"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control border-primary"
                        value={developer?.email || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label
                        htmlFor="telephone"
                        className="form-label text-primary"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="form-control border-primary"
                        value={developer?.telephone || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="description"
                    className="form-label text-primary"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control border-primary"
                    value={developer?.description || ""}
                    readOnly
                  />
                </div>

                <div className="row mb-3">
                  <label htmlFor="cv" className="form-label text-primary">
                    CV
                  </label>
                  <select
                    className="form-select border-primary"
                    value={select}
                    onChange={handleVal}
                  >
                    <option value="">...</option>
                    <option value="pdf">PDF</option>
                  </select>
                  {select === "pdf" && (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary mt-2"
                        onClick={togglePdf}
                      >
                        {showPdf ? "Hide PDF" : "Show PDF"}
                      </button>
                      {showPdf && (
                        <div className="mt-3">
                          <div ref={pdfWrapperRef} style={{ width: "100%" }}>
                            <Document
                              file={pdf}
                              onLoadSuccess={onDocumentLoadSuccess}
                            >
                              <Page pageNumber={1} width={pdfWidth} />
                            </Document>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card shadow-sm border-success">
            <div className="card-body text-center">
              <h3 className="mb-4 text-success">Fixer Status</h3>
              <select
                className="form-select mb-3 border-success"
                aria-label="Default select example"
                onChange={handleVal}
                value={select}
              >
                <option value="">--------Select--------</option>
                <option value="1">RDV</option>
                <option value="2">Pas Intéressé</option>
                <option value="3">Injoignable</option>
              </select>

              {/* Render different forms based on the selected option */}
              {select === "1" && (
                <form>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control mb-2 border-success"
                    />
                    <input
                      type="time"
                      className="form-control border-success"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              )}

              {select === "2" && (
                <form>
                  <select
                    className="form-select mb-2 border-success"
                    aria-label="Default select example"
                    defaultValue=""
                  >
                    <option value="0">--------Select------</option>
                    <option value="1">Activité</option>
                    <option value="2">Local</option>
                    <option value="3">Horaire</option>
                  </select>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              )}

              {select === "3" && (
                <form>
                  <select
                    className="form-select mb-2 border-success"
                    aria-label="Default select example"
                    defaultValue=""
                  >
                    <option value="">--------Select------</option>
                    <option value="1">Injoignable 1</option>
                    <option value="2">Injoignable 2</option>
                    <option value="3">Injoignable 3</option>
                  </select>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
