import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full bg-[#fff] border-[#d7d7d7] border-t-1 flex flex-col justify-center items-center md:p-10 p-5 gap-3'>
        <div>
          <ul className='flex flex-col md:flex-row justify-between items-center gap-2'>
            <li>
              <Link href="/terms-&-conditions" className='underline'>
                Terms & Conditions
              </Link>
            </li>
            <p className='hidden md:block'>|</p>
            <li>
              <Link href="/privacy-policy" className='underline'>
                Privacy Policy
              </Link>
            </li>
            <p className='hidden md:block'>|</p>
            <li>
              <Link href="/about" className='underline'>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <p className='text-center md:text-base text-sm'>© 2025 Dialautocoverage.com. All rights reserved.</p>
        <div className='w-full flex flex-col gap-3'>
            <p className='md:text-sm text-xs'>This website is a marketing platform and is not affiliated with any government agency or insurance provider. We connect consumers with licensed insurance agents and carriers through Pay-Per-Call partnerships. Your call may be directed to a third-party partner or licensed agent who can assist with your insurance needs.</p>
            <h6>Consent & TCPA Disclosure</h6>
            <p className='md:text-sm text-xs'>By submitting your information on this site or calling the number provided, you provide your express written consent to be contacted by DialAutoCoverage, its marketing partners, and licensed insurance agents via phone call, email, or text message for marketing purposes—using an automatic telephone dialing system or pre-recorded voice messages—even if your number is listed on a federal, state, or corporate Do Not Call list. Consent is not a condition of any purchase. Standard messaging and data rates may apply.</p>
            <p className='md:text-sm text-xs'>Quotes and coverage availability vary by state and individual eligibility. All calls are recorded for quality assurance. Use of this site constitutes acceptance of our <Link href="/terms-&-conditions" className='font-bold text-blue-500'>Terms of Service</Link> and <Link href="/privacy-policy" className='font-bold text-blue-500'>Privacy Policy.</Link></p>
        </div>
    </div>
  )
}

export default Footer