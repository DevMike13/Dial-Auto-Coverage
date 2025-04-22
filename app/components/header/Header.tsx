import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[90px] bg-[#e8f1ff] border-gray-300 border-b-1 flex items-center justify-between px-2 md:px-12'>
      <div>
        <img src="/logo.png" alt="Logo" width={280} height={101} className='hidden sm:block' />
        <img src="/logo_m.png" alt="Logo" width={50} height={50} className='block sm:hidden' />
      </div>
      <div className='flex items-center justify-center md:gap-5 gap-2'>
        <img src="/ph-call-icn.png" alt="Logo" width={42} height={42} className='hidden sm:block animate-tada' />
        <img src="/ph-call-icn.png" alt="Logo" width={22} height={22} className='block sm:hidden animate-tada' />
        <div>
          <p className='md:text-sm text-xs'>Speak with a Licensed Insurance Agent</p>
          <p className='md:text-2xl text-sm font-bold text-red-500'><a href="tel:+18333321499">(833) 332 1499 TTY 711</a></p>
          <p className='md:text-sm text-xs'>Available: Mon - Sun  8AM - 6PM CST</p>
        </div>
      </div>
    </div>
  )
}

export default Header