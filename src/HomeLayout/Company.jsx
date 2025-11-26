import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { cardAnimation } from '../Components/animation';

const Company = ({ company }) => {
  const { id, logo } = company;

  return (
    <motion.div
      variants={cardAnimation}   // use your animation
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }} // optional hover effect
      className=""
    >
      <Link to={`/companyDetails/${id}`}>
        <img
          className="w-[230px] h-[230px] border bg-lime-300 p-3 rounded-full"
          src={logo}
          alt=""
        />
      </Link>
    </motion.div>
  );
};

export default Company;
