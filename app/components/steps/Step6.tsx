'use client';

import { useFormStore } from '@/stores/formStore';
import { useState } from 'react';
import CallCard from '../card/CallCard';

const states = [
    { value: '', label: 'Select a State' },
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
];

const Step6 = () => {
    const { formData, updateField, nextStep, prevStep } = useFormStore();
    const [error, setError] = useState('');

    const handleNext = () => {
        if (!formData.state.trim()) {
          setError('The field is required');
          return;
        }
        setError('');
        nextStep();
    };
  
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>What is your State?</h1>
      <p className='text-center'>We use your state to determine your eligibility for certain benefits.</p>

      <select
        className="w-full h-[65px] bg-white text-center rounded-md text-xl mr-10 border-r-[20px] border-transparent"
        value={formData.state}
        onChange={(e) => updateField('state', e.target.value)}
      >
        {states.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
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

export default Step6