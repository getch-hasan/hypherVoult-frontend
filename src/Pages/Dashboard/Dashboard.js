import React, { useEffect, useState } from 'react';
import useCountDown from 'react-countdown-hook';
import { useStopwatch, useTimer } from 'react-timer-hook';



const Dashboard = () => {
    const targetDate = new Date('2023-12-31T23:59:59'); // Set your target date and time here
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);

    function calculateTimeLeft(target) {
        const now = new Date().getTime();
        const difference = target - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    return (
        <div className='mt-5'>
            <div className='grid justify-between grid-cols-3 items-center'>
                <div className='grid items-center rounded-lg bg-gradient-to-r from-indigo-500  to-emerald-500 w-11/12 h-40'>
                    <p className='text-white'> market cap</p>
                    <h1 className='text-white font-bold text-lg'>$25000250.71</h1>
                    <p className='text-white'>Circulating supply</p>
                    <h1 className='text-white font-bold text-lg'>8465401454</h1>
                </div>
                <div className=' grid items-center gap-0 rounded-lg bg-gradient-to-r from-indigo-500 w-11/12 h-40 via-purple-500 to-pink-500'>
                    <p className='text-white'>hyper vault price</p>
                    <h1 className='text-white font-bold text-lg'>$0.71</h1>
                    <p className='text-white'>Backend liquidity</p>
                    <h1 className='text-white font-bold text-lg'>0%</h1>
                </div>
                <div className='grid items-center rounded-lg bg-gradient-to-r from-indigo-500 w-11/12 h-40 from-10% via-sky-500  to-slate-400'>
                    <p className='text-white'>next rebase</p>
                    <h1 className='text-white font-bold text-lg'><p>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p></h1>
                    <p className='text-white'>average hyper vault holding </p>
                    <h1 className='text-white font-bold text-lg'>$8465401</h1>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='bg-[#1C2750] h-44 mt-5 ms-1 me-7 rounded-lg grid grid-cols-2 items-center'>
                    <div><p className=''>hyper vault price</p>
                        <h1 className='font-medium text-2xl text-[#24D5A9]'>$0.192</h1></div>
                    <div className='grid justify-end me-10 drop-shadow-2xl '><h2 className='bg-[#24D5A9] text-[#000000] h-11 w-36 rounded-3xl items-center grid '>+2.59%</h2></div>

                </div>
                <div className='bg-[#1C2750] h-44 mt-5 ms-1 me-7 rounded-lg grid grid-cols-2 items-center'>
                    <div><p className=''>hyper vault price</p>
                        <h1 className='font-medium text-2xl text-[#24D5A9]'>$0.192</h1></div>
                    <div className='grid justify-end me-10 drop-shadow-2xl '><h2 className='bg-[#24D5A9] text-[#000000] h-11 w-36 rounded-3xl items-center grid '>+2.59%</h2></div>

                </div>
                <div className='bg-[#1C2750] h-44 mt-5 ms-1 me-7 rounded-lg grid grid-cols-2 items-center'>
                    <div><p className=''>hyper vault price</p>
                        <h1 className='font-medium text-2xl text-[#24D5A9]'>$0.192</h1></div>
                    <div className='grid justify-end me-10 drop-shadow-2xl '><h2 className='bg-[#24D5A9] text-[#000000] h-11 w-36 rounded-3xl items-center grid '>+2.59%</h2></div>

                </div>
                <div className='bg-[#1C2750] h-44 mt-5 ms-1 me-7 rounded-lg grid grid-cols-2 items-center'>
                    <div><p className=''>hyper vault price</p>
                        <h1 className='font-medium text-2xl text-[#24D5A9]'>$0.192</h1></div>
                    <div className='grid justify-end me-10 drop-shadow-2xl '><h2 className='bg-[#24D5A9] text-[#000000] h-11 w-36 rounded-3xl items-center grid '>+2.59%</h2></div>

                </div>

            </div>
            <div>
                <div className='bg-[#1C2750] h-44 mt-5 ms-1 me-7 rounded-lg  grid justify-start items-center'>
                    <div className='grid justify-start'><p >total reward</p>
                        <h1 className='font-medium text-3xl text-[#24D5A9]'>$0.192</h1>
                        <p className='ms-12'>0.00 hyperVault (0.00% increase)</p></div>



                </div>
                <div className='grid justify-center grid-cols-3 items-center divide-x divide-red-300 mt-5 me-7 rounded-xl h-72 bg-[#1C2750]'>
                    <div className=''><h1 className='font-medium text-xl text-[#24D5A9]'>Next Rebase</h1>
                        <p>00:07:00</p>
                        <h1 className='mt-4 font-medium text-xl text-[#24D5A9]'>APY</h1>
                        <p>607714.1%</p>
                    </div>

                    <div className=''><h1 className='font-medium text-xl text-[#24D5A9]'>Next Rebase</h1>
                        <p>00:07:00</p>
                        <h1 className='mt-4 font-medium text-xl text-[#24D5A9]'>APY</h1>
                        <p>607714.1%</p>
                    </div>

                    <div className=''><h1 className='font-medium text-xl text-[#24D5A9]'>Next Rebase</h1>
                        <p>00:07:00</p>
                        <h1 className='mt-4 font-medium text-xl text-[#24D5A9]'>APY</h1>
                        <p>607714.1%</p>
                    </div>

                </div>
                <div className=' grid grid-cols-2 '>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>APY</h2>
                        <p>607714.1%</p>

                    </div>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>APY</h2>
                        <p>607714.1%</p>

                    </div>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>APY</h2>
                        <p>607714.1%</p>

                    </div>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>APY</h2>
                        <p>607714.1%</p>

                    </div>

                </div>
                <div className='grid grid-cols-3  '>
                    <div className='mb-5 bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>$ Value of incinerator</h2>
                        <p>607714.1%</p>

                    </div>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>$ Value of incinerator</h2>
                        <p>#60771</p>

                    </div>
                    <div className='bg-[#1C2750] h-32 mt-5 ms-1 me-7 grid justify-center items-center gap-1 rounded-lg'>

                        <h2 className=' font-medium text-xl text-[#24D5A9]'>$  incinerator</h2>
                        <p>607714.1%</p>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Dashboard;