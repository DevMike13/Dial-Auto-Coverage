import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#fff] border-[#d7d7d7] border-t-1 flex flex-col justify-center items-center md:p-10 p-5 gap-3'>
        <div>
            <p><a href="#" target="_blank">Privacy Policy</a> | <a href="#" target="_blank">Terms of Use</a> | <a href="#" target="_blank">Contact Us</a></p>
        </div>
        <p className='text-center md:text-base text-sm'>© 2025 Leadingmedicare.com. All rights reserved.</p>
        <div className='w-full flex flex-col gap-3'>
            <p className='md:text-sm text-xs'>This website is owned and operated by Leading Medicare, LLC a licensed insurance agency. Invitations for applications for insurance on leadingmedicare.com are made through Leading Medicare LLC, only where licensed and appointed. Leading Medicare license information can be found here.We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options. To send a complaint to Medicare, call 1-800-MEDICARE (TTY users should call 1-877-486-2048), 24 hours a day/7 days a week). If your complaint involves a broker or agent, be sure to include the name of the person when filing your grievance. Leading Medicare LLC is not affiliated with (Name], nor any government agency.</p>
            <p className='md:text-sm text-xs'>The purpose of this site is the solicitation of insurance. [Medicare supplement insurance is available to those age 65 and older enrolled in Medicare Parts A and B and in some states to those under age 65 eligible for Medicare due to disability or End Stage Renal disease. Medicare supplement insurance plans are not connected with or endorsed by the U.S. government or the federal Medicare program.]</p>
            <p className='md:text-sm text-xs'>Consent to Be Contacted: I agree to be contacted by select insurance carriers and financial institutions listed here, their agents, individual insurance agents, and/or Leading Medicare LLC for marketing purposes concerning insurance and/or other financial products by phone/ext. at my number provided above (including by autodialer, precorded message and/or artificial voice), even if my number is on a do not call list, or by eamil at the email address I have provided. Texts about these offers may be sent from Leading Medicare's Shopper Alerts number, [number] (message & data rats may apply). Consent is not requiredto make a purchase and I can opt out any time.</p>
        </div>
    </div>
  )
}

export default Footer