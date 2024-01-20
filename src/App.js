import './App.css';
import LoginForm from './features/UserLogin/userLogin';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './features/UserRegistration/userRegistrationForm';
import { useState } from 'react';
import Finance from './features/AddFinances/addFinance';

function App() {

  const [token, setToken] = useState();

  return (
    <div className="App">
      <div className='navBar'><h1>Mern Stack Project</h1></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm setToken={setToken} />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/finance' element={<Finance token={token} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
