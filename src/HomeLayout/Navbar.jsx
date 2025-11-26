import React, {  use, useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user , logOut}= useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      alert("logged out")
    }).catch((error)=>{
      // console.log(error)
    })
  };
    return (
        <div className="navbar bg-gradient-to-r from-white to-blue-50 shadow-sm flex justify-between">
  <div className="flex items-center">
    <img src="https://i.postimg.cc/0y8PHGxr/download1.png" className='w-[50px] ml-4 p-1' alt="" />
    <p className='font-bold text-2xl'>Job Tracker</p>
  </div>
  <div className="flex">
  <ul className="menu menu-horizontal px-1 gap-4">
    {user ? (
  <>
    <div className='flex gap-5 items-center'>
      <NavLink to='/profile'>
        <img className='w-12 rounded-full' src={user.photoURL} alt="" />
      </NavLink>
      <NavLink to='/auth/login' onClick={handleLogOut} className="btn bg-red-600 text-white">
        Logout
      </NavLink>
    </div>
  </>
): (
      // If no user, show Login/Register links
      <>
        <li>
          <NavLink className="btn bg-slate-900 text-white" to="/auth/login">Login</NavLink>
        </li>
        <li>
          <NavLink className="btn bg-slate-900 text-white" to="/auth/register">
            Register
          </NavLink>
        </li>
      </>
    )}
  </ul>
</div>

</div>
    );
};

export default Navbar;