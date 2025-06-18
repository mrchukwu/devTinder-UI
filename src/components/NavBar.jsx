import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';
import axios from 'axios';

const NavBar = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return null; // or a loading spinner
  }

  const handleLogout = async () => {
    try{
      await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      return navigate("/login");
    }catch(err){
      console.log(err)
    }
  }

  return (
  <div className="navbar bg-base-300">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">👨‍💻DevMate</Link>
    </div>
    {user && ( 
    <div className="flex gap-2">
        <p className="py-2 mr-4">Welcome, {user?.user?.firstName}</p>
        <div className="form-control"></div>

      <div className="dropdown dropdown-end mx-5 flex ">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user photo"
              src={user?.user?.photoUrl}  />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-12 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">Profile</Link>
          </li>
          <li>
            <Link to="/connections">Friends</Link>
          </li>
          <li>
            <Link to="/requests">Friend request</Link>
            </li>
          <li><Link onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>

    </div>  
      )}
  </div>
  )
}

export default NavBar