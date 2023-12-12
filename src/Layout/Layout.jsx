import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Header/NavBar/NavBar';

const Layout = () => {
    return (
        <div className='bg-gray-50'>
            <NavBar></NavBar>
           <div className='container pt-20 mx-auto'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Layout;