'use client';


import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useFormStore } from 'stores/formStore';



export default function Home() {
  const { step, hasHydrated } = useFormStore();

  const renderStep = () => {
    switch (step) {
      case 0: return <Step1 />;
      case 1: return <Step2 />;
      case 2: return <Step3 />;
      case 3: return <Step4 />;
      default: return <Step1 />;
    }
  };
  if (!hasHydrated) return null;

  return (
    <main className="w-full h-auto bg-[#e8f1ff]">
      <Header />
      <div className='w-full flex justify-center mt-10 mb-20'>
        <div className='md:max-w-[500px] max-w-[330px] w-full'>
          {renderStep()}
        </div>
      </div>
      <Footer />
    </main>
  );
}
