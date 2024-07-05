import React from 'react'

function addDev() {
  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
   ajouter dev     ss </button>

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
              ajouter Dev
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className='text-dark-emphasis'>
              <div  className='mb-3 '>
                  <label  >Photo</label>
                  <input
                  type='file'
                  className='form-control'

                  />

                </div>
               
                <div  className='mb-3 '>
                  <label  >Nom</label>
                  <input
                  type='text'
                  className='form-control'

                  />

                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Prenom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                
                  
                  />
                 
                </div >
                <div  className='mb-3'>
                  <label >username</label>
                
                   <input
                  type='text'
                  className='form-control'
          
                 
                  />

                </div>
                
                <div  className='mb-3'>
                  <label  >Email</label>
                  <input
                  type='email'
                  className='form-control'
                 
                  
                  
                  />
                 

                </div> 
                <div  className='mb-3'>
                  <label >Tel</label>
                  <input
                  type='text'
                  className='form-control'
                  
                  />

                </div>
                <div  className='mb-3'>
                  <label >dateNaissance</label>
                  <input
                  type='text'
                  className='form-control'
                  />

                </div>  
                
               
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
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
  )
}

export default addDev
