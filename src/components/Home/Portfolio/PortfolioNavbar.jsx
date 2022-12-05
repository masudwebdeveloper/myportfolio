import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioNavbar = () => {
    return (
        <div>
            <ul className='flex justify-center gap-5 text-white'>
                <li>
                    <NavLink to='/portfolio'>All</NavLink>
                </li>
                <li>
                    <NavLink>Brand</NavLink>
                </li>
                <li>
                    <NavLink>Design</NavLink>
                </li>
                <li>
                    <NavLink>Photos</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default PortfolioNavbar;