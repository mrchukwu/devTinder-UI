import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

    const [emailId, setEmailId] = useState("jane@gmail.com");
    const [password, setPassword] = useState("@Jane123");

    const handleLogin = async () => {
        try{
            const res = await axios.post("http://localhost:3000/login", {
                emailId,
                password
            }, {withCredentials: true})
        }catch(err){
            console.error(err)
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
                onChange={(e) => setEmailId(e.target.value)}
                />
            </fieldset>
            </div>
            <div className="card-actions justify-center">
            <button className="btn btn-primary btn-wide" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login