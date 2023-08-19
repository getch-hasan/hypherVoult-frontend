import React from 'react';

const HypherSwap = () => {
    return (

        <div className=' border grid grid-cols rounded-lg w-1/2 my-5  bg-[#101C43]'>
            <div className='p-4 border-[#FFFFFF] grid  gap-4'>
                <div>
                    <p className='text-end'>Swap</p>
                    <p>Trade tokens in an instant</p>
                </div>
                <hr />
                <p className='flex justify-between'><p>Token Amount to Lock  </p> <button className=' border  px-1 rounded-2xl font-light  '>max</button></p>
                <p className='text-start'>BNB</p>
                <input className='border-none p-2 rounded-lg text-right' type="text" value='0.0' />

                <p className='text-start'>Slippage Tolerance</p>
                <input className='border-none p-2 rounded-lg text-right' type="text" value='0.0' />
                <button className='rounded-md p-2 bg-[#24D5A9] text-[#000000]'>swap</button>
            </div>
        </div>

    );
};

export default HypherSwap;