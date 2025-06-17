import React, { useState } from 'react'
import UserCard from './userCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';

const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.user.firstName);  
  const [lastName, setLastName] = useState(user.user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.user.photoUrl);
  const [age, setAge] = useState(user.user.age);
  const [gender, setGender] = useState(user.user.gender);
  const [about, setAbout] = useState(user.user.about);
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const updateProfile = async() => {
    setError("");
    try{
        const res = await axios.patch(BASE_URL + "/profile/edit", {
            firstName, lastName, photoUrl,age, gender, about
        },
    {withCredentials: true});
    const updatedUser = res?.data?.data;

    if (updatedUser) {
      dispatch({ type: "UPDATE_PROFILE", payload: updatedUser }); // ✅ Fixed
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
        setError(err?.response?.data || "An error occurred while updating profile.")
    }
        // dispatch(res?.data?.data)
        // setShowToast(true);
        // setTimeout(() => {
        //     setShowToast(false);
        // }, 3000);
    }catch(err){
          console.error("Error:", err);
    setError(err?.response?.data || "An error occurred while updating profile.");
        // setError(err.response.data)
    }
  };

  return (
    <>
   
       {showToast && (<div className="toast toast-top toast-center ">
            <div className="alert alert-success">
                <span>Profile updated successfully.</span>
            </div>
        </div>)
        }
        <div className='flex justify-center my-3'>
        <h1 className='tex'>Hello {firstName}</h1>
        <div className='flex justify-center gap-3 my-10'>
            <div className="flex justify-center ">
                <div className="card bg-base-300 w-96 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Edit Profile</h2>
                        <div>
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend">Firstname:</legend>
                            <input 
                            className="input " 
                            type="email" 
                            value={firstName} 
                            required 
                            placeholder="e.g Kennedy" 
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend">Lastname:</legend>
                            <input 
                            className="input" 
                            type="email" 
                            value={lastName} 
                            required 
                            placeholder="e.g Chukwu" 
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend">Photo Url:</legend>
                            <input 
                            className="input" 
                            type="email" 
                            value={photoUrl} 
                            required 
                            placeholder="e.g https://imageurl.com" 
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            />
                        </fieldset>
                        <div className="flex gap-3">
                            <fieldset className="fieldset ">
                                <legend className="fieldset-legend">Age:</legend>
                                <input 
                                className="input" 
                                type="email" 
                                value={age} 
                                required 
                                placeholder="e.g 18" 
                                onChange={(e) => setAge(e.target.value)}
                                />
                            </fieldset>
                            <fieldset className="fieldset ">
                                <legend className="fieldset-legend">Gender:</legend>
                                <input 
                                className="input" 
                                type="email" 
                                value={gender} 
                                placeholder="e.g male" 
                                onChange={(e) => setGender(e.target.value)}
                                />
                                {/* <input type="text" className="input" placeholder="gender" list="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                />
                                    <datalist id="gender">
                                    <option value="male"></option>
                                    <option value="female"></option>
                                    <option value="other"></option>
                                    </datalist> */}
                            </fieldset>
                        </div>
                        <fieldset className="fieldset ">
                                <legend className="fieldset-legend">Your bio:</legend>
                                <textarea 
                                className="input" 
                                type="email" 
                                value={about} 
                                required 
                                placeholder=" tell us about yourself!" 
                                onChange={(e) => setAbout(e.target.value)}
                                />
                            </fieldset>
                        </div>
                        <div className="card-actions justify-center my-3">
                        <button className="btn btn-primary btn-wide" onClick={updateProfile}>Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard user={{firstName, lastName, photoUrl,age, gender, about}}/>
        </div>
        </div>
    </>
  )
}

export default EditProfile