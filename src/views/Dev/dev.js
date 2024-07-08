import { CBadge } from '@coreui/react'
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import AddDev from './addDev';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const Dev  = () =>  {
   function Bb() {
    
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ]
      });
    
    
  }
  
 
  

  return (
    
    <div>
    
       <div>
            <CBadge color="success"><AddDev/></CBadge>
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
           
           <th scope="col" width="20%">Photo</th>
             <th scope="col" width="20%">Nom</th>
             <th scope="col" width="20%">Prenom</th>
             <th scope="col" width="20%">Email</th>
             <th scope="col" width="20%">Editer</th>
             <th scope="col" width="20%">Supprimer</th>  
   
   
           </tr>
         </thead>
     <tbody>
       <tr>
      
   
         <td>1 Oct, 21</td>
         <td><i class="fa fa-check-circle-o green"></i><span class="ms-1">Paid</span></td>
         <td><img src="https://i.imgur.com/VKOeFyS.png" width="25"/> Althan Travis</td>
      
         <td><span class="fw-bolder">ana@ana.com</span> <i class="fa fa-ellipsis-h  ms-2"></i></td>
         <td ><GrEdit color='cyan' size={30}/></td>
         <td><MdDelete  color='purple' size={40}  onClick={Bb} /></td>
       </tr>
       
   
       
   
       
       
     
     </tbody>
   </table>
     
     </div>
       
   </div>

        </div>
      

      
          

     
    
    </div>
  )
}

export default Dev
