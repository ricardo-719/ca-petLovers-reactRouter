import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';
// import Outlet

const Root = () => {
    return (
        <>
            <Navigation/>
            <Outlet />
        </>
    );
};

export default Root;