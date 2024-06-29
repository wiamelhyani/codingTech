
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './views/pages/login';
import Register from './views/pages/register';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" name="Login Page" element={<Login />} />
        <Route path="/register" name="Register Page" element={<Register />} />

      


      </Routes>
    </HashRouter>
  );
}

export default App;
