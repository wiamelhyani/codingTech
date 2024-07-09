import React, { useState } from 'react';

function Profile() {
    const [select, setSelect] = useState(null);

   
  const handleVal = (e) => {
    setSelect(e.target.value);
  };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-center border border-primary shadow p-3 mb-5 bg-body rounded">
                        <h3 className='text-bg-info'>Profile</h3>
                        <div className="card">
                            <form className="form-card" onSubmit={(e) => e.preventDefault()}>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">Prénom</label>
                                        <input type="text" id="fname" name="fname" placeholder="" readOnly />
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">Nom</label>
                                        <input type="text" id="lname" name="lname" placeholder="" readOnly />
                                    </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">Email</label>
                                        <input type="text" id="email" name="email" placeholder="" readOnly />
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">Numéro</label>
                                        <input type="text" id="mob" name="mob" placeholder="" readOnly />
                                    </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label px-3">Photo</label>
                                        <input type="text" id="job" name="job" placeholder="" readOnly />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-center border border-primary shadow p-3 mb-5 bg-body rounded">
                        <h3 className='text-bg-success'>Fixer Status</h3>
                        <select className="form-select" aria-label="Default select example" onChange={handleVal}>
          <option value=""  selected>--------Select</option>
          <option value="1">RDV</option>
          <option value="2">Pas Interesse</option>
          <option value="3">Injoingnable</option>
        </select>

        {select === '1' && (
          <form>
            <input type='date' />
            <input type='time' />
            <button  class="btn btn-success">Submit</button>    
            </form>
        )}

        {select === '2' && (
            <form>
                 <select className="form-select" aria-label="Default select example">
    
            <option value="0"selected>--------Select------</option>
            <option value="1">Activite</option>
            <option value="2">Local</option>
            <option value="3">Horraire</option>
            
          </select>
          <button  class="btn btn-success">Submit</button>    
            </form>
         
        )}
           {select === '3' && (
            <form>
                  <select className="form-select" aria-label="Default select example">
            <option value="" selected>--------Select------</option>
            <option value="1">Injoingnable 1</option>
            <option value="1">Injoingnable 1</option>
            <option value="1">Injoingnable 1</option>
 
          </select>
          <button  class="btn btn-success">Submit</button>    
          

            </form>
        
        )}
                    </div>
                 
                </div>
            </div>
        </div>
    );
}

export default Profile;
