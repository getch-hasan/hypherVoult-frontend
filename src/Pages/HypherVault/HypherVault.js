import React from 'react';
import UseTime from '../Shared/UseTime';

const HypherVault = () => {
    const [timeLeft] = UseTime()
    return (
        <div className='py-8'>
            <div className='bg-[#1D2950] w-full rounded-lg grid justify-center items-center px-10 py-14'>
                <p className='text-[#FFFFFFCC]'>Your HyperVault Balance</p>
                <h1 className='text-[#24D5A9]  text-4xl font-medium]'>$10,000</h1>
            </div>
            <div className='pt-5'>
                <div className='grid justify-center gap-7'><h1 className='font-medium text-3xl'>TOTAL LOCKED TOKEN AMOUNT : 5000</h1>
                    <div class="grid grid-flow-col gap-5 justify-center items-center text-center auto-cols-max">
                        <div class="flex flex-col justify-center items-center h-24 w-24 rounded-full bg-[#222E53] p-5 ">
                            <span class="countdown font-semibold text-2xl">
                                {timeLeft.days}
                            </span>
                            days
                        </div>
                        <h1 className='font-medium text-3xl'>:</h1>
                        <div class="flex flex-col justify-center items-center h-24 w-24 rounded-full bg-[#222E53] p-5">
                            <span class="countdown font-semibold text-2xl">
                                {timeLeft.hours}
                            </span>
                            hours
                        </div>
                        <h1 className='font-medium text-3xl'>:</h1>
                        <div class="flex flex-col  justify-center items-center h-24 w-24 rounded-full bg-[#222E53] p-5">
                            <span class="countdown font-semibold text-2xl">
                                {timeLeft.minutes}
                            </span>
                            min
                        </div>
                        <h1 className='font-medium text-3xl'>:</h1>
                        <div class="flex flex-col justify-center items-center h-24 w-24 rounded-full bg-[#222E53] p-5">
                            <span class="countdown font-semibold text-2xl">
                                {timeLeft.seconds}
                            </span>
                            sec
                        </div>
                    </div>
                    <div className=' border grid grid-cols content-center rounded-lg  bg-[#101C43]'>
                        <div className='p-4 border-[#FFFFFF] grid  gap-4'><p>Increased APY rate : <span className='text-[#24D5A9]'>1,016,088.893%</span></p>
                            <hr />
                            <p className='flex justify-between'><p>Token Amount to Lock  </p> <button className=' border  px-1 rounded-2xl font-light  '>max</button></p>
                            <input className='border-none p-2 rounded-lg text-right' type="text" value='0.0' />
                            <button className='rounded-md p-2 bg-[#24D5A9] text-[#000000]'>lock</button></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HypherVault;