import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerNewUser } from "../services/network";

export default function Signup() {
    const navigate = useNavigate();
    const [newUserData, setNewUserData] = useState({email: '', password: '',confirmPassword: ''})

    const [errorMessage, setErrorMessage] = useState('')

    const handleNewUserChange = e => {
        setNewUserData(previous => ({ ...previous, [e.target.name]: e.target.value }));
        setErrorMessage(null);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newUserData.password.length < 10) {
            setErrorMessage("Password should contain at least 10 letters or digits or special characters");
            return;
        }

        if (!/[!@#$%^&*()_\-+=~`,<.>/?{}[\]|\\;:'"]/.test(newUserData.password)) {
            setErrorMessage("Password should contain at least 1 special character");
            return;
        }

        if (!/[a-z]/.test(newUserData.password) || !/[A-Z]/.test(newUserData.password)) {
            setErrorMessage("Password should contain at least 1 lowercase letter and 1 uppercase letter");
            return;
        }

        if (newUserData.password !== newUserData.confirmPassword) {
            setErrorMessage("Password does not match with confirm password");
            return;
        }
        
        const result = await registerNewUser({email: newUserData.email, password: newUserData.password});
        if (result.success) {
            navigate('/login');
        } else {
            setErrorMessage(result.error);
        }
    }

    return (
        <div className="user-form">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            {errorMessage && <label className="errorMessage">{errorMessage}</label>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input  value={newUserData.email} onChange={handleNewUserChange} name="email" type="email" className="form-control" placeholder="Email"  required />
                </div>
                <div className="form-group"><label htmlFor="Password">Password</label>
                    <input value={newUserData.password}  onChange={handleNewUserChange} name="password" type="password" className="form-control" placeholder="Password"  required />
                </div>
                <div className="form-group">
                    <label htmlFor="Confirm password">Confirm password</label>
                    <input value={newUserData.confirmPassword} onChange={handleNewUserChange} name="confirmPassword" type="password" className="form-control" placeholder="Confirm password" required />
                </div>
                <div className="d-grid mb-2">
                    <input type="submit" className="btn-lg-su btn btn-primary btn-lg" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}
