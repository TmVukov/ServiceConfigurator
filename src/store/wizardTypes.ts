export interface WizardFormState {
  modal: boolean;
  showMessage: boolean;
  discountSuccess: boolean;
  step: number;
}

export interface WizardCalcState {
  checkedServices: string[];
  prices: number[];
  totalPrice: number;
  discount: number;
}

export interface WizardDataState {
  brand: string;
  name: string;
  email: string;
  phone: string;
  message: string | undefined;
}
