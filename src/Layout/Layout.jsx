import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Header/NavBar/NavBar';

const Layout = () => {
    return (
        <div className='bg-blue-950'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;