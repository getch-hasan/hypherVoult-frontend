import React, { useState } from 'react';

const Calculator = () => {
    const allData = [
        { info1: 'Your initial investment', info2: '$0.00' },
        { info1: 'Current wealth', info2: '$0.00' },
        { info1: 'HyperVault rewards estimation', info2: '0.00 HyperVault' },
        { info1: 'Potential return', info2: '$0.00' },

    ]
    const [value, setValue] = useState(15);

    const handleRangeChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className='m-8 bg-[#101C43]'>
            <h1 className='font-medium text-start text-[#FFF] text-4xl'>Calculator</h1>
            <p className='text-start'>Estimate your returns</p>
            <div className='grid grid-cols-3  gap-5 p-10'>
                <div className='bg-[#1D2950] w-full rounded-lg grid justify-center items-center px-10 py-14'>
                    <p className='text-[#FFFFFFCC]'>HyperVault Price</p>
                    <h1 className='text-[#24D5A9]  text-4xl font-medium]'>$0.201145</h1>
                </div>
                <div className='bg-[#1D2950] w-full rounded-lg grid justify-center items-center px-10 py-14'>
                    <p className='text-[#FFFFFFCC]'>APY:</p>
                    <h1 className='text-[#24D5A9]  text-4xl font-medium]'>617,122.283%</h1>
                </div>
                <div className='bg-[#1D2950] w-full rounded-lg grid justify-center items-center px-10 py-14'>
                    <p className='text-[#FFFFFFCC]'>Your HyperVault Balance</p>
                    <h1 className='text-[#24D5A9]  text-4xl font-medium]'>10,000</h1>
                </div>

            </div>
            <div className='grid grid-cols-2 gap-7 '>
                <div>
                    <p className='text-start py-4'> HyperVault Amount</p>
                    <div className='flex justify-between bg-[#1D2950] rounded-lg p-5'>
                        <p>O</p>
                        <p>max</p>
                    </div>
                </div>
                <div>
                    <p className='text-start py-4'> APY (%)</p>
                    <div className='flex justify-between bg-[#1D2950] rounded-lg p-5'>
                        <p>617,122.283</p>
                        <p>Current</p>
                    </div>
                </div>
                <div>
                    <p className='text-start py-4'> HyperVault price at purchase ($)</p>
                    <div className='flex justify-between bg-[#1D2950] rounded-lg p-5'>
                        <p>0.201145</p>
                        <p>Current</p>
                    </div>
                </div>
                <div>
                    <p className='text-start py-4'> Future HyperVault PRICE ($)</p>
                    <div className='flex justify-between bg-[#1D2950] rounded-lg p-5'>
                        <p>0.201145</p>
                        <p>Current</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-start font-bold text-3xl'>30 Days</p>
                <input onChange={handleRangeChange} type="range" min="0" max="30" value={value} class="range range-sm" />
                <div>
                    {
                        allData.map(data =>
                            <div class="overflow-x-auto ">

                                <table class="table table-zebra">
                                    <tbody>
                                        <tr className=' border border-[#ffffff1a] flex justify-between align-center '>
                                            <td className='font-medium '>{data.info1}</td>
                                            <td className='font-medium text-[#24D5A9]'>{data.info2}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Calculator;