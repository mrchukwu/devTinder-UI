import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useData = useSelector(store => store.user)

  const fetchUser = async () => {
    if(useData) return;

   try{ const res = await axios.get(BASE_URL + "/profile/view", {
      withCredentials: true
    });
    dispatch(addUser(res.data));
  }catch(err){
    if(err.status === 401){
      navigate("/login");
    }
    console.log(err)
  }
};

useEffect(() => {
    fetchUser();
}, [])

  return (
    <div>
        <NavBar />
        <Outlet  />
        <Footer />
    </div>
  )
}

export default Body