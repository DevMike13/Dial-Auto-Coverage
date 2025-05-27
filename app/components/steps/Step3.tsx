'use client';

import { useFormStore } from 'stores/formStore';
import { useState } from 'react';

const Step3 = () => {
  const { formData, updateField, nextStep, prevStep } = useFormStore();
  const [error, setError] = useState('');

  const handleNext = () => {
    // if (!formData.firstName?.trim() || !formData.lastName?.trim()) {
    //   setError('First and Last Name are required');
    //   return;
    // }
    // setError('');
    // nextStep();
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>First Name and Last Name</h1>
      <p className='text-center'>This is the name that will be on your application</p>
      <input
        className="w-full h-[65px] bg-[#FFFFFF] text-center rounded-md text-xl"
        placeholder="First Name"
        // value={formData.firstName}
        // onChange={(e) => updateField('firstName', e.target.value)}
      />
      <input
        className="w-full h-[65px] bg-[#FFFFFF] text-center rounded-md text-xl"
        placeholder="Last Name"
        // value={formData.lastName}
        // onChange={(e) => updateField('lastName', e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
      <div className="flex justify-between gap-2 mt-5">
        <button onClick={prevStep} className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer md:text-2xl text-xl font-semibold">
          Back
        </button>
        <button onClick={handleNext} className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer bg-[#1c2753] md:text-2xl text-xl font-semibold text-white">
          Continue
        </button>
      </div>
    </div>
  )
}

export default Step3