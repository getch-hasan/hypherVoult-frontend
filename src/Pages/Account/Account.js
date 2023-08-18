import React from 'react';
import UseTime from '../Shared/UseTime';

const Account = () => {
    const allData = [
        { info1: 'Curent HyperVault Price', info2: '$0.1950 USD' },
        { info1: 'Next Reward Amount', info2: 'HyperVault' },
        { info1: 'Next Reward Amount USD', info2: 'USD' },
        { info1: 'Next Reward Yield', info2: '$0.1950 USD' },
        { info1: 'Monthly ROIe', info2: '73.08%' },
        { info1: 'Monthly ROI USD', info2: 'USD' }

    ]
    const [timeLeft] = UseTime()
    return (
        <div className='grid grid-cols-1 gap-8'>
            <div className='mt-8 rounded-md h-32 flex-start   flex flex-col bg-gradient-to-r  from-[#30BD96] to-[#88EACF] '>
                <p className='flex-1 text-start ms-8   text-[#FFFFFFE5]  text-md'>Total Earned</p>
                <p className='flex-1 text-start ms-8   text-[#FFFFFFE5]  font-semibold text-4xl'>$0.00</p>
                <p className='flex-1 text-start ms-8   text-[#FFFFFFE5]   text-md'>0.00 HyperVault (0.00% increase)</p>
            </div>
            <div className='grid grid-cols-2 gap-8 items-center'>
                <div className='flex border-1 w-full h-32'>
                    <div className='bg-[#101C43] grid align-center text-start p-4 w-full'>
                        <p className='text-[#FFFFFFE5]  text-md'>APY</p>
                        <p className='text-[#24D5A9]  text-4xl font-medium'>617,122.283%</p>
                        <p className='text-[#FFFFFFE5]  text-md'>Daily ROI 2.42%</p>
                    </div>
                    <div className='bg-[#1C2751] grid align-center text-start p-4 rounded-lg w-full'>
                        <p className='text-[#FFFFFFE5]  text-md'>Your Balance</p>
                        <input className='bg-[#24D5A9] ' type="text" name="" id="" />
                        <p className='text-[#FFFFFFE5]  text-md'>0.00 HyperVault</p>
                    </div>
                </div>
                <div className='flex w-full h-32'>
                    <div className='bg-[#101C43] grid align-center text-start p-4 w-full'>
                        <p className='text-[#FFFFFFE5]  text-md'>Next Rebase:</p>
                        <p className='text-[#24D5A9]   text-4xl font-medium'><p>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p></p>
                        <p className='text-[#FFFFFFE5]  text-md'>Interest Coming In Your Wallet</p>
                    </div>
                    <div className='bg-[#1C2751] text-start grid align-center p-4 w-full rounded-lg'>
                        <p className='  text-[#FFFFFFE5]  text-md'>Your Earnings/Daily</p>
                        <input className='bg-[#24D5A9]' type="text" name="" id="" />
                        <p className='  text-[#FFFFFFE5]  text-md'>0.00 HyperVault </p>
                    </div>
                </div>
            </div>
            <div className='p-8'>
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
    );
};

export default Account;