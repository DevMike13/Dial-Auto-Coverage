'use client';

import { useFormStore } from '@/stores/formStore';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const Step7 = () => {
  const { formData, updateField, nextStep, prevStep, resetForm } = useFormStore();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const campaignId = searchParams.get('offer_id');
  const affId = searchParams.get('affiliate_id');
  const s1 = searchParams.get('sub1');

  const handleSubmit = async () => {
    const phone = formData.phone?.trim() || '';
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setIsSubmitting(true);

    let endpoint = '';
    let payload: Record<string, any> = {};

   
    if (formData.medicareEnrollment === 'Yes') {
      endpoint = 'https://rtb.retreaver.com/rtbs.json';
      payload = {
        key: '057afaea-398c-4b16-a072-d6378092801e',
        publisher_id: '3178',
        caller_number: phone,
        call_key: '057afaea-398c-4b16-a072-d6378092801e',
        caller_zip: formData.zip,
        caller_state: formData.state,
        firstname: formData.firstName,
        lastname: formData.lastName,
        dob: formData.birthDate,
      };
    } else {
      endpoint = 'https://rtb.retreaver.com/rtbs.json';
      payload = {
        key: '717a2b82-54aa-4b1e-b472-c2426a155c9f',
        publisher_id: '3178',
        caller_number: phone,
        call_key: '057afaea-398c-4b16-a072-d6378092801e',
        caller_zip: formData.zip,
        caller_state: formData.state,
        firstname: formData.firstName,
        lastname: formData.lastName,
        dob: formData.birthDate,
      };
    }

    try {
      console.log('Submitting to:', endpoint);
      console.log('Payload:', payload);
      console.log('Ans:', formData.medicareEnrollment)

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data to lead depot');
      }

      const result = await response.json();
      const parsedResult = JSON.parse(result.result);
      const inboundNumber = parsedResult.inbound_number;

      if (inboundNumber) {
        localStorage.setItem('inbound_number', inboundNumber);
      }

      router.push('/thank-you');

      setTimeout(() => {
        resetForm();
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-bold md:text-4xl text-2xl text-center'>What's your phone number?</h1>
      <p className='text-center'>We’ll use this to contact you with your benefit information.</p>

      <input
        className="w-full h-[65px] bg-white text-center rounded-md text-xl"
        placeholder="Phone Number"
        value={formData.phone || ''}
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
          updateField('phone', digits);
        }}
        inputMode="numeric"
        maxLength={10}
      />

      {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

      <div className="flex justify-between gap-2 mt-5">
        <button
          onClick={prevStep}
          className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer md:text-2xl text-xl font-semibold"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="w-full md:h-[65px] h-[55px] rounded-md cursor-pointer bg-[#1c2753] md:text-2xl text-xl font-semibold text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export const SuspenseStep7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Step7 />
  </Suspense>
);
