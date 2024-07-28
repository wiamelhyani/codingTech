import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdf from '../Profile/cv.pdf'; // Adjust path as necessary

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

function Profile() {
  const [select, setSelect] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false); // State to control PDF visibility

  const handleVal = (e) => {
    setSelect(e.target.value);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
        <form className="form-card" onSubmit={(e) => e.preventDefault()}>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3" htmlFor="fname">Prénom</label>
                <input type="text" id="fname" name="fname" placeholder="" readOnly value="John" />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3" htmlFor="lname">Nom</label>
                <input type="text" id="lname" name="lname" placeholder="" readOnly value="Doe" />
              </div>
            </div>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3" htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="" readOnly value="john.doe@example.com" />
              </div>
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3" htmlFor="mob">Numéro</label>
                <input type="text" id="mob" name="mob" placeholder="" readOnly value="+1234567890" />
              </div>
            </div>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-3" htmlFor="job">Photo</label>
                <input type="text" id="job" name="job" placeholder="" readOnly value="profile.jpg" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="text-center border border-primary shadow p-3 mb-5 bg-body rounded">
            <h3 className="text-bg-success">Fixer Status</h3>
            <select
              className="form-select"
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
            {select === '1' && (
              <form>
                <input type='date' />
                <input type='time' />
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            )}

            {select === '2' && (
              <form>
                <select className="form-select" aria-label="Default select example" defaultValue="">
                  <option value="0">--------Select------</option>
                  <option value="1">Activité</option>
                  <option value="2">Local</option>
                  <option value="3">Horaire</option>
                </select>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            )}

            {select === '3' && (
              <form>
                <select className="form-select" aria-label="Default select example" defaultValue="">
                  <option value="">--------Select------</option>
                  <option value="1">Injoignable 1</option>
                  <option value="2">Injoignable 2</option>
                  <option value="3">Injoignable 3</option>
                </select>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Button to toggle PDF visibility */}
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={togglePdf}>
          {showPdf ? 'Hide CV' : 'Show CV'}
        </button>
      </div>

      {/* Display PDF document based on showPdf state */}
      {showPdf && (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <Document
            file={pdf}
            loading={<div>Loading PDF...</div>}
            error={<div>Error loading PDF.</div>}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
}

export default Profile;
