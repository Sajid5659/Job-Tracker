import React from 'react';
import Navbar from '../HomeLayout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../HomeLayout/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;