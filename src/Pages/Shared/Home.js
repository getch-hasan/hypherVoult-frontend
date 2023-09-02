
import logo from '../../image/WklYFshH_400x400.jpg'

import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Account from '../Account/Account';
import HypherVault from '../HypherVault/HypherVault';
import HypherSwap from '../HypherSwap/HypherSwap';
import Docs from '../Docs/Docs';
import Calculator from '../Calculator/Calculator';
import Footer from './Footer';
import Modal from '../modal/Modal';
import useModalContext from '../../Hooks/useModalContext';

const Home = () => {
   const {setIsModalOpen}=useModalContext()

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div className=''>
            <div className='flex relative  '>

                <div class="menu fixed  bg-[#17254E]  min-h-screen w-72  ">
                    <div className='  ms-14 mt-7  w-32'>
                        <img className='h-20 w-20' src={logo} alt="" />
                    </div>
                    <div className=' mt-24'><ul className='ms-5 '>
                        <li className='ms-2   rounded-s-3xl  relative '>
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
                <div className='bg-blue-950 ms-4 rounded-md  absolute right-0  h-14 w-4/5'>
                    <div className='grid sticky top-0 items-center'>
                        <p className='text-end mt-1 me-4 font-semibold text-white '>HyperVault <span className='font-light'>$0.019</span>  USD  <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={openModal}
                        >
                            Connect
                        </button></p>
                        


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
                    <Footer></Footer>
                    <Modal></Modal>
                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-2xl max-h-full">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Terms of Service
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div class="p-6 space-y-6">
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>

                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>





            </div>

        </div>
    );
};

export default Home;