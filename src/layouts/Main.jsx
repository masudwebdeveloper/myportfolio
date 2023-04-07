import React from 'react';
import { Outlet } from 'react-router-dom';
// this your main section
const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;