import React from 'react'
import { Navigate } from 'react-router-dom'
import AddRec from './addRecruteur'
const Recruteur = () => {
 

  return (
    
    <>
        <AddRec/>
   
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Email</th>
      <th scope="col">Tel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
   
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>

    </>
    
  )
}

export default Recruteur
