'use client';

import { useFormStore } from 'stores/formStore';
import { useState, useEffect } from 'react';
import FinalCallCard from '../card/FinalCallCard';

const Step5 = () => {
  const { resetForm } = useFormStore();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  useEffect(() => {
    if (isLoading) {
      let step = 0;
      const totalSteps = 800;
      const duration = 3000;
      const intervalTime = duration / totalSteps;

      const interval = setInterval(() => {
        step++;
        setProgress(step);

        if (step >= totalSteps) {
          clearInterval(interval);
          setIsLoading(false);
          setIsSubmitted(true);
        }
      }, intervalTime);

      const timeouts = [
        setTimeout(() => setShowStep1(true), 0),
        setTimeout(() => setShowStep2(true), 1000),
        setTimeout(() => setShowStep3(true), 2000),
      ];

      return () => {
        clearInterval(interval);
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isLoading]);

  return (
    <div className='flex flex-col gap-5'>
      { isSubmitted ? (
          <div className="text-center">
            <p className="text-lg"><b>Great News!</b> One of our team members will be calling you shortly to arrange your Medicare plan review. If you wish to speak to a Licensed Insurance Agent immediately, please tap the button below to be connected.</p>
            <FinalCallCard />
          </div>
          ) : 
          (
            <>
              {isLoading && (
                <div className='w-full mb-20'>
                  <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div
                    className="h-full rounden-full bg-blue-600 bg-stripes animate-stripes transition-all duration-500"
                    style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className='w-full max-w-[380px] m-auto mt-10 relative'>
                    
                    <div className="absolute top-[0px] left-[33px] h-[90%] md:top-[0px] md:left-[39.5px] md:h-[100%] border-l-2 border-dashed border-[#1c2753] z-0"></div>
                    
                    {/* Step 1: DETAILS */}
                    {showStep1 && (
                      <div className='flex items-center md:gap-20 gap-10 relative z-10 animate-fadeInUp'>
                        <div className="relative">
                          <div className='w-[68px] md:w-[80px] h-[68px] md:h-[80px] border-2 border-[#1c2753] rounded-full flex justify-center items-center bg-white relative'>
                            <img src="/profile-ic.png" alt="Logo" width={30} height={30} className='hidden rounded-full sm:block' />
                            <img src="/profile-ic.png" alt="Logo" width={26} height={26} className='block rounded-xl sm:hidden' />
                          </div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-[70px] md:top-[75px] text-[#1c2753]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12,16 8,10 16,10" />
                            </svg>
                          </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <p className='font-bold text-xl'>Reviewing Your Details</p>
                          <p className='font-extralight text-sm'>Checking Your Information</p>
                        </div>
                      </div>
                    )}

                    {/* Step 2: AREA */}
                    {showStep2 && (
                      <div className='flex items-center mt-8 md:gap-20 gap-10 relative z-10 animate-fadeInUp'>
                        <div className="relative">
                          <div className='w-[68px] md:w-[80px] h-[68px] md:h-[80px] border-2 border-[#1c2753] rounded-full flex justify-center items-center bg-white relative'>
                            <img src="/area-ic.png" alt="Logo" width={30} height={30} className='hidden rounded-full sm:block' />
                            <img src="/area-ic.png" alt="Logo" width={26} height={26} className='block rounded-xl sm:hidden' />
                          </div>
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-[70px] md:top-[75px] text-[#1c2753]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="12,16 8,10 16,10" />
                            </svg>
                          </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <p className='font-bold text-xl'>Searching Your Area</p>
                          <p className='font-extralight text-sm'>Finding Local Providers</p>
                        </div>
                      </div>
                    )}

                    {/* Step 3: PROVIDERS */}
                    {showStep3 && (
                      <div className='flex items-center mt-8 md:gap-20 gap-10 relative z-10 animate-fadeInUp'>
                        <div className='w-[68px] md:w-[80px] h-[68px] md:h-[80px] border-2 border-[#1c2753] rounded-full flex justify-center items-center bg-white relative'>
                          <img src="/plan-ic.png" alt="Logo" width={30} height={30} className='hidden rounded-full sm:block' />
                          <img src="/plan-ic.png" alt="Logo" width={26} height={26} className='block rounded-xl sm:hidden' />
                        </div>
                        <div className='flex flex-col gap-1 justify-start'>
                          <p className='font-bold text-xl'>Matching Providers</p>
                          <p className='font-extralight text-sm'>Searching for Licensed</p>
                          <p className='font-extralight text-sm'>Insurance Agents</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )
      }
    </div>
  )
}

export default Step5