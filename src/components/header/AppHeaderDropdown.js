import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CAvatar, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownHeader, CDropdownItem } from '@coreui/react';
import { cilAccountLogout } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import avatar8 from './../../assets/images/avatars/8.jpg';
import axiosInstance from '../../maxios/axiosInstance';

const AppHeaderDropdown = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    try {
      const response = await axiosInstance.post('auth/logout');
      if (response.status === 200) {
        setSuccess(true);
        navigate('/login'); // Redirect to the login page
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      setError('Error during logout');
      console.error(error);
    }
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem onClick={handleLogout} className="dropdown-item">
          <CIcon icon={cilAccountLogout} className="me-2 text-danger" />
          Déconnexion
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
