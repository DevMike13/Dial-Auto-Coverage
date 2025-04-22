'use client';

import { useFormStore } from 'stores/formStore';
import { useState } from 'react';

const Step3 = () => {
  const { formData, updateField, prevStep } = useFormStore();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!formData.age.trim()) {
      setError('Age is required');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
    alert('Form Submitted! Check the console.');
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>What Day Were You Born?</h1>
      <input
        className="w-full h-[65px] bg-[#FFFFFF] text-center rounded-md text-xl"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => updateField('age', e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="flex justify-between gap-2 mt-5">
        <button onClick={prevStep} className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer md:text-2xl text-xl font-semibold">
          Back
        </button>
        <button onClick={handleSubmit} className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer bg-[#1c2753] md:text-2xl text-xl font-semibold text-white">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Step3