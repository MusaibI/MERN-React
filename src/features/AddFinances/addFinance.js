import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Finance = ({ token }) => {

    const [income, setIncome] = useState();
    const [saving, setSaving] = useState();
    const [expense, setExpense] = useState();

    const onClickSubmit = async () => {
        const instance = axios.create({
            baseURL: 'http://localhost:8050/api/financial-details',
            headers: { 'Authorization': token }
        });

        console.log("toekn", token)

        const body = {
            income, saving, expense
        }
        const result = await instance.post('/', body)
        console.log(result);
    }
    return (
        <div className='login-container'>
            <h1>Add Finances</h1>
            <div className='userForm'>
                <div className='Income'>
                    <label>Income: </label>
                    <input className="income" type='number' placeholder='Inceme' value={income} onChange={(e) => setIncome(e.target.value)} />
                </div>

                <div className='Savings'>
                    <label>Savings: </label>
                    <input className="saving" type='number' placeholder='Saving' value={saving} onChange={(e) => setSaving(e.target.value)} />
                </div>

                <div className='Expenses'>
                    <label>Expenses: </label>
                    <input className="expenses" type='number' placeholder='Expenses' value={expense} onChange={(e) => setExpense(e.target.value)} />
                </div>

                <div className='loginButton'>
                    <button className='login-submit' onClick={onClickSubmit}>Submit</button>
                </div>
            </div>

            <NavLink to='/'>User Login</NavLink>
        </div>
    )
}

export default Finance;