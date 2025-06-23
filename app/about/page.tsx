import React from 'react'

const page = () => {
  return (
    <div className='bg-white w-full h-auto flex justify-center items-center flex-col'>
        <div className='p-6 w-full md:max-w-[780px] m-auto pt-10'>
            <h1 className="text-2xl md:text-4xl font-black text-center mb-10">About Us</h1>
            <p className='text-center'>
                <b>Dialautocoverage.com</b> is a website where we help users find the best deals online. All of the offers and promotions shown on the site are custom curated for selected users only. To contact us, please email us at <a href="mailto:support@dialautocoverage.com" className='text-blue-500 underline'>support@dialautocoverage.com</a>
            </p><br />
            <p className='text-center'>1440 W. Taylor St # 1025</p>
            <p className='text-center'>Chicago, IL 60607</p>
            <p className='text-center'>United States</p>
        </div>
    </div>
  )
}

export default page