'use client';

import { useFormStore } from '@/stores/formStore';
import { useState } from 'react';
import CallCard from '../card/CallCard';

const Step2 = () => {
  const { formData, updateField, nextStep, prevStep } = useFormStore();
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!formData.zip.trim()) {
      setError('The field is required');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>What is your ZIP code?</h1>
      <p className='text-center'>Your zip code will help us see what benefits could be available in your area.</p>
      <input
        className="w-full h-[65px] bg-[#FFFFFF] text-center rounded-md text-xl"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={(e) => {
          const numericZip = e.target.value.replace(/\D/g, '').slice(0, 5);
          updateField('zip', numericZip);
        }}
        inputMode="numeric"
        pattern="\d{5}"
        maxLength={5}
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
      {/* <CallCard /> */}
    </div>
  )
}

export default Step2