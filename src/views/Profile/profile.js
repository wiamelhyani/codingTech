import React, { useState } from 'react';

function Profile() {
    const [select, setSelect] = useState(null);

    function handleVal(e) {
        if (e.target.value === "1") {
            setSelect(1);
        } else {
            setSelect(null);
        }
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center border border-primary shadow p-3 mb-5 bg-body rounded">
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
                    <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center border border-primary shadow p-3 mb-5 bg-body rounded'>
                    <div className='container-fluid' >
                        <div className='row d-flex'>
                        <h3 className='text-bg-success'>Fixer RDV</h3>
                        <select className="form-select" aria-label="Default select example" onChange={handleVal}>
                            <option value="" selected></option>
                            <option value="0">--------Select</option>
                            <option value="1">RDV</option>
                        </select>
                        {
                            select === 1 ? (
                                <form>
                                    <input type='date' />
                                    <input type='time' />
                                    <button className='submit'>Submit</button>
                                </form>
                            ) : null
                        }
                            
                        <div className="card">
                    
                        
                     
                    </div>
                            
                        </div> 
                    

                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;
