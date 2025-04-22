import { create } from "@/node_modules/zustand/index";

type FormData = {
    medicareEnrollment: string;
    zip: string;
    age: string;
  };
  
  type FormStore = {
    step: number;
    formData: FormData;
    nextStep: () => void;
    prevStep: () => void;
    updateField: (field: keyof FormData, value: string) => void;
  };
  
  export const useFormStore = create<FormStore>((set) => ({
    step: 0,
    formData: {
      medicareEnrollment: '',
      zip: '',
      age: '',
    },
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
    updateField: (field, value) =>
      set((state) => ({
        formData: { ...state.formData, [field]: value },
      })),
  }));
  