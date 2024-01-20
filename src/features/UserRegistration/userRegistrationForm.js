import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const onClickSubmit = async () => {
        const body = { firstName, lastName, email, password };
        const result = await axios.post('http://localhost:8050/api/user/signup', body)
        console.log(result);
        navigate('/');
    }
    return (
        <div className='login-container'>
            <h1>Login Registration Form</h1>
            <div className='userForm'>
                <div className='fisrtName'>
                    <label>FirstName: </label>
                    <input className="firstName" type='text' placeholder='FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className='lastName'>
                    <label>Last Name: </label>
                    <input className="lastName" type='text' placeholder='LastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className='emailRegister'>
                    <label>Email: </label>
                    <input className="email" type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='passwordRegister'>
                    <label>Password: </label>
                    <input className="password" type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='loginButton'>
                    <button className='login-submit' onClick={onClickSubmit}>Submit</button>
                </div>
            </div>
            <NavLink to='/'>User Login</NavLink>
        </div>
    )
}

export default RegistrationForm;