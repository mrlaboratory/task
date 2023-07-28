import React from 'react';
import { Link, Outlet } from "react-router-dom";
import NavBar from '../Shared/Navbar/Navbar';
import group from "../assets/Group.png";
import group1 from "../assets/Group (1).png";
import group2 from "../assets/Group (2).png"
import group3 from "../assets/Group (3).png";
import group4 from "../assets/Group (4).png";
import group5 from "../assets/Group (5).png";
import group6 from "../assets/Group (6).png";

const Dashboard = () => {
    return (
        <div className='my-container bg-blue-100'>
            <NavBar></NavBar>
            <div className="lg:flex grid grid-cols-1 gap-2 lg:gap-0">
                <div className="w-full lg:w-1/4 lg:min-h-screen bg-[#FEFEFF] p-4">
                    <div className='mr-20'>
                        <div className='my-2 p-1 mt-4 ml-3 text-center bg-[#23B574] w-56 rounded-full text-white flex items-center justify-center'>
                            <p className='mb-1'>Create New Job</p>
                            <span className='text-4xl ml-2 mb-2'>+</span>
                        </div>
                        <div className="menu font-poppins p-4 space-y-2">
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group2} alt="" srcset="" className='w-5 h-5' /><Link to="/dashboard/myjobs" className='p-3 text-[15px] font-semibold'> My Jobs</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Dashboard</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group1} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Candidate R3achout</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group3} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Search Assistant</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group4} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Interview</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group5} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Intake</Link></span>
                            <span className='w-56 mr-8 rounded-full bg-[#FEFEFF] active:bg-blue-100 inline-flex items-center px-5 py-1'><img src={group6} alt="" srcset="" className='w-5 h-5' /><Link to="" className='text-[15px] p-3 font-semibold'> Job description</Link></span>
                        </div>
                    </div>
                    <div className='bg-[#0C579B] text-center text-white rounded-lg py-10 px-3 my-12 space-y-4'>
                        <h1 className='text-lg font-semibold'>Upgrade your account</h1>
                        <p>
                        Increase your usage and get early access to new features
                        </p>
                        <button className='w-56 p-2 bg-[#23B574] rounded-full'>Upgrade</button>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 lg:overflow-hidden">
                    <div className='font-poppins'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
