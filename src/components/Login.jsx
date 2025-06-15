import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addUser, removeUser } from "../utils/userSlice"
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

    const [emailId, setEmailId] = useState("kennedy@gmail.com");
    const [password, setPassword] = useState("@Kennedy12");
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
    }

  return (
<div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
            <h2 className="card-title">Login</h2>
            <div>
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
                type="text" 
                value={password} 
                required 
                placeholder="******" 
                onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            <div className="mb-2"><a href="#">forgot password</a></div>
            </div>
            <p className='text-red-400 mb-2'>{error}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary btn-wide" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login