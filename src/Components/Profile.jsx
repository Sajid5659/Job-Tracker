import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { profileAnimation } from "./animation";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

//   if (!user) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-xl font-bold">No user logged in</p>
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
      <motion.div
        className="bg-slate-800 shadow-2xl p-8 rounded-xl w-full max-w-md text-center"
        variants={profileAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="p-3">
          <img
            src={user.photoURL}
            className="w-62 h-62 rounded-full p-3 bg-gray-400 mx-auto border"
          />
        </div>
        <h1 className="text-5xl text-white font-bold mt-4">{user.displayName || "No Name"}</h1>
        <p className="text-white mt-4 text-xl">{user.email}</p>
        <p className="text-sm text-white mt-4">UID: {user.uid}</p>
      </motion.div>
      <Link to="/">
        <button className="btn btn-success border border-amber-300 text-black mt-10">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Profile;
