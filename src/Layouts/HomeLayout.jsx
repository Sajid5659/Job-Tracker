import React from 'react';
import Navbar from '../HomeLayout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../HomeLayout/Footer';
import DynamicTitle from '../Components/DynamicTitle';
import { motion } from "framer-motion";

// Variants for page content
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  }
};

// Variants for Navbar
const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// Variants for Footer
const footerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
};

const HomeLayout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="min-h-screen flex flex-col"
    >
      <DynamicTitle />

      {/* Navbar animation */}
      <motion.div variants={navbarVariants}>
        <Navbar />
      </motion.div>

      {/* Main content animation */}
      <motion.main
        className="flex-1"
        variants={contentVariants}
      >
        <Outlet />
      </motion.main>

      {/* Footer animation */}
      <motion.div variants={footerVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default HomeLayout;
