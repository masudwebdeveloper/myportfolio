import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </React.Fragment>
    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">MR</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;