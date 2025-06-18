import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice"
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const res = await axios.post(BASE_URL + "/login", 
            {
                emailId,
                password
            }, {withCredentials: true}
        );
            dispatch(addUser(res.data));
            return navigate("/");

        }catch(err){
            setError(err?.response?.data?.message || "Something went wrong!")
        }
    };

    const handleSignUp = async() => {
        try{
            const res = await axios.post(BASE_URL + "/signup",
                 {firstName, lastName, emailId, password},
                 {withCredentials: true}
                );
                console.log(res?.data?.data)
                dispatch(addUser(res?.data?.data));
                return navigate("/profile");
        }catch(err){
            console.log(err.message)
            setError(err?.response?.data?.message || "Something went wrong!")
        }
    }
    
  return (
<div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
            <h2 className="card-title">{isLoginForm? "Login" : "SignUp"}</h2>
            <div>
           { !isLoginForm && 
           <>
            <fieldset className="fieldset ">
                    <legend className="fieldset-legend">Firstname</legend>
                    <input 
                    className="input" 
                    type="email" 
                    value={firstName} 
                    required 
                    placeholder="e.g kennedy" 
                    onChange={(e) => setFirstName(e.target.value)}
                    />

                </fieldset>

                <fieldset className="fieldset mb-2">
                    <legend className="fieldset-legend">Lastname</legend>
                    <input 
                    className="input " 
                    type="text" 
                    value={lastName} 
                    required 
                    placeholder="chukwu" 
                    onChange={(e) => setLastname(e.target.value)}
                    />
                </fieldset>
            </>
            }
            <fieldset className="fieldset ">
                <legend className="fieldset-legend">Email ID</legend>
                <input 
                className="input validator" 
                type="email" 
                value={emailId} 
                required 
                placeholder="e.g kennedy@gmail.com" 
                onChange={(e) => setEmailId(e.target.value)}
                />

            </fieldset>

            <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend">Password</legend>
                <input 
                className="input " 
                type="password" 
                value={password} 
                required 
                placeholder="******" 
                onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            {isLoginForm && <div className="mb-2">
                <a href="#">forgot password</a>
                </div>}
            </div>
            <p className='text-red-400 mb-2'>{error}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary btn-wide" onClick={isLoginForm ? handleLogin : handleSignUp}>{isLoginForm ? "Login" : "SignUp"}</button>
            </div>
            <p className='text-center cursor-pointer my-4'
                onClick={() => setIsLoginForm((value) => !value)}
                style={{"fontSize": "1rem"}}
            >
                {isLoginForm? `New User?  SignUp` : `Existing User?  Login Here`}
            </p>
        </div>
    </div>
</div>
  )
}

export default Login