import React from 'react';

import { Outlet } from 'react-router';

import Navbar from '../HomeLayout/Navbar';
import Footer from '../HomeLayout/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='mx-auto w-11/12 py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;