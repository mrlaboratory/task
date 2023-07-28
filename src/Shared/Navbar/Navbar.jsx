import React from 'react';
import logo from "../../assets/Logo.png";
import image from "../../assets/Ellipse 445.png"
import { BiMessage } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa';
const NavBar = () => {
    const navOptions = <>
        <li className='border rounded-lg'><Link to=""><FaAngleLeft size={22} /></Link></li>
        <li className='ml-2'><Link to="">My Jobs</Link></li>
        <li><Link to=""><FaAngleRight size={12} /> Frontend Developer</Link></li>
        <li><Link to=""><FaAngleRight size={12} />Job Management</Link></li>
    </>
    const extraNav = <>
        <li className=''><Link to=""> <span className='bg-blue-100 p-3 rounded-full'><BiMessage className='text-green-600' size={26} /></span></Link></li>
        <li className='ml-2'><Link to=""><span className='bg-blue-100 p-3 rounded-full'><IoNotificationsOutline className='text-green-600' size={26} /></span></Link></li>
        <li><Link to=""><span className='text-3xl'>|</span></Link></li>
        <li><Link to=""><img src={image} alt="" srcset="" /></Link></li>
        <li className=''><Link to=""> <span className='bg-blue-100 p-3 rounded-full'><FaAngleDown size={26} /></span></Link></li>

    </>
    return (
        <div className='my-container mx-auto'>
            <div className="navbar bg-[#FEFEFF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={logo} className='ml-4' alt="" sizes="" srcset="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                    <ul className="menu menu-horizontal px-1  ml-20">
                        {extraNav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
