import React from 'react';
import logo from '../../image/WklYFshH_400x400.jpg'

import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Account from '../Account/Account';
import HypherVault from '../HypherVault/HypherVault';
import HypherSwap from '../HypherSwap/HypherSwap';
import Docs from '../Docs/Docs';
import Calculator from '../Calculator/Calculator';

const Home = () => {
    return (
        <div>
            <div className='flex '>

                <div class="menu  bg-blue-950 w-72 h-screen ">
                    <div className=' fixed ms-14 mt- -6 h-32 w-32'>
                        <img className='h-20 w-20' src={logo} alt="" />
                    </div>
                    <div className='fixed mt-32'><ul className='ms-5 '>
                        <li className='ms-2 '>
                            <Link to='dashboard'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Dashboard
                            </Link>
                        </li>
                        <li className='ms-2 mt-5'>
                            <Link to='/account'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Account
                            </Link>
                        </li>
                        <li className='ms-2 mt-5'>
                            <Link to='/calculator'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Calculator
                            </Link>
                        </li>
                        <li className='ms-2 mt-5'>
                            <Link to='/hypherVoult'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                Hyper Vault
                            </Link>
                        </li>
                        <li className='ms-2 mt-5'>
                            <Link to='/hypherSwap'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Hyper swap
                            </Link>

                        </li>
                        <li className='ms-2 mt-5'>
                            <Link to='/docs'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                Docs
                            </Link>
                        </li>
                    </ul></div>
                </div>
                <div className='bg-blue-950 ms-4 rounded-md    h-14 w-4/5'>
                    <div className='grid  items-center'>
                        <p className='text-end mt-1 me-4 font-semibold text-white '>HyperVault <span className='font-light'>$0.019</span>  USD <button className='bg-secondary btn btn-secondary'>Connect wallet</button></p>

                    </div>
                    <Routes>
                        <Route path='/' element={<Dashboard></Dashboard>}></Route>
                        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                        <Route path='/account' element={<Account></Account>}></Route>
                        <Route path='/calculator' element={<Calculator></Calculator>}></Route>
                        <Route path='/hypherVoult' element={<HypherVault></HypherVault>}></Route>
                        <Route path='/hypherSwap' element={<HypherSwap></HypherSwap>}></Route>
                        <Route path='/Docs' element={<Docs></Docs>}></Route>
                    </Routes>

                </div>




            </div>
        </div>
    );
};

export default Home;