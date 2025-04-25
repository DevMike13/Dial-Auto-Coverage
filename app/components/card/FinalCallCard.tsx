import React from 'react'

const FinalCallCard = () => {
  return (
    <div className='max-w-[510px] w-full md:mb-20 md:px-4 px-3 py-3 shadow-md flex flex-col justify-center items-center border-2 border-white gap-5 bg-[#f2f7ff] mt-5'>
        <a href="tel:+18333321499" className='w-full'>
            <div className='w-full flex items-center md:gap-5 gap-5 bg-[#1c2753] px-5 py-5 rounded-lg'>
                <img src="/thank-btn.jpg" alt="Logo" width={70} height={70} className='hidden rounded-xl sm:block animate-tada' />
                <img src="/thank-btn.jpg" alt="Logo" width={42} height={42} className='block rounded-xl sm:hidden animate-tada' />
                <div className='flex flex-col items-start'>
                    <p className='md:text-2xl text-lg font-bold text-red-500'>CALL TOLL-FREE</p>
                    <p className='md:text-2xl text-lg font-bold text-red-500'>(833) 332 1499 TTY 711</p>
                </div>
            </div>
        </a>
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-500 animate-ping flex justify-center items-center md:mt-0 mt-1'>
                <div className='w-1 h-1 rounded-full bg-green-900'></div>
            </div>
            <p className='md:text-sm text-xs'>Licensed Insurance Agents are standing by ready to assist you.</p>
        </div>
    </div>
  )
}

export default FinalCallCard