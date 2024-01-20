import React, { useState } from 'react';
import axios from 'axios';

import './userLogin.css'
import { NavLink, useNavigate } from 'react-router-dom';
const LoginForm = ({ setToken }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const onClickSubmit = async () => {
        const body = { email, password };
        const result = await axios.post('http://localhost:8050/api/user/signin', body)
        console.log(result)
        if (result.data.success) {
            setToken(result.data.resp);
            console.log("success")
            navigate('/finance');
        }
        else {
            setMessage(result.data.error);
        }
    }
    return (
        <div className='login-container'>
            <h1>Login User Form</h1>
            {message}
            <div className='userForm'>
                <div className='userName'>
                    <label>Email: </label>
                    <input className="email" type="email" placeholder='userEmail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='password'>
                    <label>Password: </label>
                    <input className="password" type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='loginButton'>
                    <button className='login-submit' onClick={onClickSubmit}>Submit</button>
                </div>
            </div>

            <NavLink to='/register'>If New User Register</NavLink>
        </div>
    )
}

export default LoginForm;