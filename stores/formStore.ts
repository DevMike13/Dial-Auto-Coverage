import { create } from "@/node_modules/zustand/index";
import { persist } from '@/node_modules/zustand/middleware';

type FormData = {
    medicareEnrollment: string;
    zip: string;
    state: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phone: string;
  };
  
  type FormStore = {
    step: number;
    formData: FormData;
    nextStep: () => void;
    prevStep: () => void;
    updateField: (field: keyof FormData, value: string) => void;
    resetForm: () => void;
    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
  };
  
  export const useFormStore = create<FormStore>()(
    persist(
      (set) => ({
        step: 0,
        formData: {
          medicareEnrollment: '',
          zip: '',
          state: '',
          firstName: '',
          lastName: '',
          birthDate: '',
          phone: ''
        },
        nextStep: () => set((state) => ({ step: state.step + 1 })),
        prevStep: () => set((state) => ({ step: state.step - 1 })),
        updateField: (field, value) =>
          set((state) => ({
            formData: { ...state.formData, [field]: value },
          })),
        resetForm: () =>
          set({
            step: 0,
            formData: {
              medicareEnrollment: '',
              zip: '',
              state: '',
              firstName: '',
              lastName: '',
              birthDate: '',
              phone: ''
            },
          }),
          hasHydrated: false,
          setHasHydrated: (hasHydrated) => set({ hasHydrated }),
      }),
      {
        name: 'form-storage',
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  );
  