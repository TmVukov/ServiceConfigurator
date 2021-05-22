import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WizardDataState } from './wizardTypes';

const initialState: WizardDataState = {
  brand: '',
  name: '',
  email: '',
  phone: '',
  message: '',
};

const wizardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setBrandName(state, { payload: brandName }: PayloadAction<string>) {
      state.brand = brandName;
    },
    setName(state, { payload: formName }: PayloadAction<string>) {
      state.name = formName;
    },
    setEmail(state, { payload: formEmail }: PayloadAction<string>) {
      state.email = formEmail;
    },
    setPhone(state, { payload: formPhone }: PayloadAction<string>) {
      state.phone = formPhone;
    },
    setMessage(
      state,
      { payload: formMessage }: PayloadAction<string | undefined>,
    ) {
      state.message = formMessage;
    },
  },
});

export const { setBrandName, setName, setEmail, setPhone, setMessage } =
  wizardSlice.actions;

export default wizardSlice.reducer;
