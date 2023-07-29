import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";


const Header = () => {
    
    return (
        <>
            <div className='p-8'>
                <div className="navbar bg-base-100 rounded">
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li tabIndex={0}>
                                    <a className='ml-1 text-gray-500'>Job Title</a>
                                    <div>
                                        <select className=" font-semibold">
                                            <option selected><Link to="">Frontend Developer</Link></option>
                                            <option>Backend Developer</option>
                                            <option>Full Stack Developer</option>
                                        </select>
                                        <p><FaCog size={12} className='text-black' /></p>
                                    </div>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Hiring Manager</a>
                                    <p className=' font-semibold'>Nail Patel</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Department</a>
                                    <p className=' font-semibold'>Techn</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Team</a>
                                    <p className=' font-semibold'>Team-A</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Client</a>
                                    <p className=' font-semibold'>John Doe</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Status</a>
                                    <p className=' font-semibold text-[#23B574]'>Open</p>
                                </li>
                                <li>
                                    <a className='text-gray-500'>Priority</a>
                                    <p className=' font-semibold text-[#EB5757]'>High</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2">
                            <li tabIndex={0}>
                                <a className='ml-1 text-gray-500'>Job Title</a>
                                <div>
                                    <select className=" font-semibold">
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                        <option value="Full Stack Developer">Full Stack Developer</option>
                                    </select>
                                    <p><FaCog size={12} className='text-black' /></p>

                                </div>

                            </li>
                            <li>
                                <a className='text-gray-500'>Hiring Manager</a>
                                <p className=' font-semibold'>Nail Patel</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Department</a>
                                <p className=' font-semibold'>Techn</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Team</a>
                                <p className=' font-semibold'>Team-A</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Client</a>
                                <p className=' font-semibold'>John Doe</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Status</a>
                                <p className=' font-semibold text-[#23B574]'>Open</p>
                            </li>
                            <li>
                                <a className='text-gray-500'>Priority</a>
                                <p className=' font-semibold text-[#EB5757]'>High</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;