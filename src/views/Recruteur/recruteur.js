import React from 'react'
import { Navigate } from 'react-router-dom'
import AddRec from './addRecruteur'
const Recruteur = () => {
 

  return (
    
    <>
        <AddRec/>
        <div class="container mt-5 px-2">
    
    <div class="mb-2 d-flex justify-content-between align-items-center">
        
        <div class="position-relative">
            <span class="position-absolute search"><i class="fa fa-search"></i></span>
            <input class="form-control w-100" placeholder="Search by order#, name..."/>
        </div>
        
        <div class="px-2">
            
            <span>Filters <i class="fa fa-angle-down"></i></span>
            <i class="fa fa-ellipsis-h ms-3"></i>
        </div>
        
    </div>
    <div class="table-responsive">
    <table class="table table-responsive table-borderless">
        
      <thead>
        <tr class="bg-light">
        
  
          <th scope="col" width="20%">Nom</th>
          <th scope="col" width="10%">Prenom</th>
          <th scope="col" width="20%">Email</th>
          <th scope="col" width="20%">Rel</th>
          <th scope="col" class="text-end" width="20%"><span>u can add as much u want </span></th>
        </tr>
      </thead>
  <tbody>
    <tr>
   

      <td>1 Oct, 21</td>
      <td><i class="fa fa-check-circle-o green"></i><span class="ms-1">Paid</span></td>
      <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"/> Althan Travis</td>
      <td>Wirecard for figma</td>
      <td class="text-end"><span class="fw-bolder">$0.99</span> <i class="fa fa-ellipsis-h  ms-2"></i></td>
    </tr>
    

    

    
    
  
  </tbody>
</table>
  
  </div>
    
</div>
    </>
    
  )
}

export default Recruteur
