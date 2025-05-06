'use client';

import { useFormStore } from 'stores/formStore';
import { useState } from 'react';
import { useRouter } from '@/node_modules/next/navigation';
import FinalCallCard from '../card/FinalCallCard';

const Step4 = () => {
    const { formData, updateField, nextStep, prevStep } = useFormStore();
    const [error, setError] = useState('');

    const formatDate = (value: string) => {
        const numeric = value.replace(/\D/g, '');
        const mm = numeric.slice(0, 2);
        const dd = numeric.slice(2, 4);
        const yyyy = numeric.slice(4, 8);
        let formatted = mm;
        if (dd) formatted += `/${dd}`;
        if (yyyy) formatted += `/${yyyy}`;
        return formatted;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatDate(e.target.value);
        updateField('birthDate', formatted);
    };

    const isValidDate = (date: string) => {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d\d$/;
        return regex.test(date);
    };

    const handleNext = () => {
        if (!formData.birthDate.trim()) {
            setError('Birthdate is required');
            return;
        }

        if (!isValidDate(formData.birthDate)) {
            setError('Please enter a valid date in MM/DD/YYYY format');
            return;
        }
        setError('');
        nextStep();
    };

    return (
        <div className='flex flex-col gap-5'>
            <h1 className="font-bold md:text-4xl text-2xl text-center">Birth Date mm/dd/yyyy</h1>
            <input
                className="w-full h-[65px] bg-[#FFFFFF] text-center rounded-md text-xl"
                placeholder="MM/DD/YYYY"
                value={formData.birthDate}
                onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

            <div className="flex justify-between gap-2 mt-5 w-full">
                <button
                    onClick={prevStep}
                    className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer md:text-2xl text-xl font-semibold bg-gray-300"
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer bg-[#1c2753] md:text-2xl text-xl font-semibold text-white"
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Step4