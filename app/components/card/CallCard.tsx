import React from 'react'

const CallCard = () => {
  return (
    <div className='max-w-[510px] w-full md:px-15 py-8 shadow-md flex flex-col justify-center items-center border-2 border-white gap-2 bg-[#f2f7ff] mt-5'>
        <p className='md:text-lg text-md'>Speak with a Licensed Insurance Agent</p>
        <p className='md:text-lg text-md'>We're open Mon - Fri 8AM - 6PM CST</p>
        <div className='flex items-center md:gap-5 gap-2'>
            <img src="/ph-call-icn.png" alt="Logo" width={32} height={32} className='hidden sm:block animate-tada' />
            <img src="/ph-call-icn.png" alt="Logo" width={22} height={22} className='block sm:hidden animate-tada' />
            <p className='md:text-2xl text-xl font-bold text-red-500'><a href="tel:+18333321499">(833) 332 1499 TTY 711</a></p>
        </div>
    </div>
  )
}

export default CallCard