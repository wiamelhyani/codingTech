
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './views/pages/login';// Adjust the import paths as needed
// import Register from './components/Register';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" name="Login Page" element={<Login />} />

      


      </Routes>
    </HashRouter>
  );
}

export default App;
