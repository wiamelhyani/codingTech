import { Link, useNavigate } from 'react-router-dom';




import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
const Login = () => {
  const [success, setsuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // axiosInstance.post('/login', formData)
    //   .then((response) => {
        
    //     console.log('Login successful:');
    //     console.log(response.data.data.token)

    //     setTimeout(() => {
    //       localStorage.setItem('token', response.data.data.token);
    //       console.log(response.data.data.token)
    //       navigate('/dashboard'); 
    //     }, 2000);
    //     setsuccess(true)
        
    //   })
    //   .catch((error) => {
    //     console.error('Error during login:', error);
    //     setError('Error during login');
        
    //   });
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                
                    <CForm onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-body-secondary">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput 
                          name="email"
                          type="email"
                          placeholder="Email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          name="password"
                          type="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" className="px-4" type="submit">
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                    {/* {error && <Message nbr={1} />}
                    {success && <Message nbr={0} />} */}
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
  );
};

export default Login;
