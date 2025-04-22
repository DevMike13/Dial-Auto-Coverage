'use client';

import { useFormStore } from '@/stores/formStore';
import { useState } from 'react';

const Step1 = () => {
  const { updateField, nextStep } = useFormStore();
  
  const options = ['Yes', 'No', 'Prefer Not To Say'];

  const handleOptionClick = (value: string) => {
    updateField('medicareEnrollment', value);
    nextStep();
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>Are You Currently Enrolled in Medicare Parts A & B?</h1>
      <p className='text-center'>Part A covers hospital care. Part B covers medical care.</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`md:h-[65px] h-[55px] rounded-md cursor-pointer ${
              option == 'Prefer Not To Say'
                ? ''
                : 'bg-[#1c2753] md:text-2xl text-xl font-semibold text-white '
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Step1