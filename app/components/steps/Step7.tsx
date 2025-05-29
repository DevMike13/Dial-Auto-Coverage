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
  const trans_id = searchParams.get('transaction_id');
  const key = searchParams.get('key');
  const type = searchParams.get('type');

  useEffect(() => {
    console.log('key:', key);
    console.log('type:', type);
  }, [key, type]);

  const handleSubmit = async () => {
    const phone = formData.phone?.trim() || '';
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setIsSubmitting(true);

    let payload: Record<string, any> = {};
    
    if (formData.medicareEnrollment === 'Yes' && type === 'Insured') {
      console.log(key);
      payload = {
        rcm_campaign_id: campaignId || '5148',
        rcm_aff_id: affId || '1',
        rcm_aff_sub: s1 || 'mysub1',
        first_name: '',
        last_name: '',
        dob: '',
        zip_code: formData.zip,
        state: formData.state,
        phone: phone,
        xxTrustedFormCertUrl: 'https://example.com',
        api_key: key,
        transaction_id: trans_id || ''
      };
    } else if(formData.medicareEnrollment === 'No' && type === 'Uninsured') {
      console.log(key);
      payload = {
        rcm_campaign_id: campaignId || '5148',
        rcm_aff_id: affId || '1',
        rcm_aff_sub: s1 || 'mysub1',
        first_name: '',
        last_name: '',
        dob: '',
        zip_code: formData.zip,
        state: formData.state,
        phone: phone,
        xxTrustedFormCertUrl: 'https://example.com',
        api_key: key,
        transaction_id: trans_id || ''
      };
    }

    try {
      
      if(formData.medicareEnrollment === 'Yes' && type === 'Insured'){
        const response = await fetch('https://api-leaddepot.offerwings.com/api/v1/lead/receive/', {
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
      } else if (formData.medicareEnrollment === 'No' && type === 'Uninsured'){
        const response = await fetch('https://api-leaddepot.offerwings.com/api/v1/lead/receive/', {
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
      }

      const query = new URLSearchParams({
        offer_id: campaignId || '',
        affiliate_id: affId || '',
        sub1: s1 || '',
        transaction_id: trans_id || '',
        // first_name: formData.firstName || '',
        // last_name: formData.lastName || '',
        // dob: formData.birthDate || '',
        zip_code: formData.zip || '',
        state: formData.state || '',
        phone: phone || '',
        medicareEnrollment: formData.medicareEnrollment || '',
        key: key || '',
        type: type || ''
      }).toString();

      router.push(`/thank-you?${query}`);

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
          disabled={isSubmitting}
          className={`w-full md:h-[65px] h-[55px] rounded-md cursor-pointer md:text-2xl text-xl font-semibold text-white ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1c2753]'
          }`}
        >
         {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            'Submit'
          )}
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
