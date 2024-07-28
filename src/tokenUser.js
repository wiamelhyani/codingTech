// src/api/getToken.js
export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    // Optional: handle the case where token is not available
    // For example, redirect to login page
    return null;
  }
};
