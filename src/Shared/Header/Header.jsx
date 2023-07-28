import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";
const FormComponent = () => {
    return (
      <div className='mt-4'>
        <h3 className='font-semibold'>Job Management</h3>
        <form>
          {/* Add your form inputs here */}
          <div>
            <label htmlFor='jobTitle'>Job Title</label>
            <input type='text' id='jobTitle' />
          </div>
          <div>
            <label htmlFor='jobDescription'>Job Description</label>
            <textarea id='jobDescription' rows='4' cols='50' />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
  
  const SubMenu = ({ selectedOption, submenuData, onOptionClick }) => {
    return (
      selectedOption && (
        <div className='bg-base-200 rounded p-8'>
          <ul className='flex gap-5'>
            {submenuData.map((optionData, index) => (
              <li key={index}>
                <Link to='' onClick={() => onOptionClick(optionData.optionName)}>
                  {optionData.optionName}
                </Link>
              </li>
            ))}
          </ul>
          {selectedOption === 'Job Management' && <FormComponent />}
        </div>
      )
    );
  };


const Header = () => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const frontendData = [
    {
      optionName: 'Job Management',
    },
    {
      optionName: 'JD Rewrite',
    },
    {
      optionName: 'R3achout',
    },
    // Add more frontendData options as needed
  ];

  const backendData = [
    {
      optionName: 'Submenu Option 3',
    },
    {
      optionName: 'Submenu Option 4',
    },
    // Add more backendData options as needed
  ];

  const fullStackData = [
    {
      optionName: 'Submenu Option 5',
    },
    {
      optionName: 'Submenu Option 6',
    },
    // Add more fullStackData options as needed
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
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
                            <li tabIndex={0} onBlur={() => setSelectedOption('')}>
                                <a className='ml-1 text-gray-500'>Job Title</a>
                                <div>
                                    <select className=" font-semibold" value={selectedOption} onChange={handleOptionChange}>
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
            <div className='p-8 '>
            <SubMenu
          selectedOption={selectedOption}
          submenuData={
            selectedOption === 'Frontend Developer'
              ? frontendData
              : selectedOption === 'Backend Developer'
              ? backendData
              : selectedOption === 'Full Stack Developer'
              ? fullStackData
              : []
          }
          onOptionClick={handleOptionClick}
        />
                
            </div>
        </>
    );
};

export default Header;