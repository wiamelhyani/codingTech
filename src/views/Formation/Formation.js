import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

  function Formation() {
    // const [data,setData]=useState([]);   
  return (
    <div className='d-flex flex-row '>
        
    <MDBCard className='w-25 me-5 ' >
      <MDBCardImage className='w-7' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top'  />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>

      </MDBCardBody>
    </MDBCard>
    <MDBCard className='w-25'>
      <MDBCardImage className='w-7' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      
      </MDBCardBody>
    </MDBCard>
    
    
    </div>
  )
}

export default Formation;

