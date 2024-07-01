export const getToken = () => {
    // Check if the token is stored in local storage
    const token = localStorage.getItem('token');
  
    // If token is available, return it
    if (token) {
      return token;
    } else {
      // Handle the case where token is not available (e.g., redirect to login page)
      // For example:
      // window.location.href = '/login'; // Redirect to login page
      return null;
    }
  };
  