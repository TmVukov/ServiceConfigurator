import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WizardCalcState } from './wizardTypes';

const initialState: WizardCalcState = {
  checkedServices: [],
  prices: [],
  totalPrice: 0,
  discount: 0,
};

const wizardCalcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    setService(state, { payload: serviceName }: PayloadAction<string>) {
      state.checkedServices.push(serviceName);

      state.prices = state.checkedServices
        .map((service) => service.replace(/\D/g, ''))
        .map((el) => Number(el));

      state.totalPrice = state.prices.reduce((a, c) => a + c, 0);

      state.discount = state.totalPrice * 0.3;
    },
    removeService(state, { payload: serviceName }: PayloadAction<string>) {
      const serviceIndex = state.checkedServices.indexOf(serviceName);
      state.checkedServices.splice(serviceIndex, 1);

      const priceIndex = state.prices.indexOf(
        Number(serviceName.replace(/\D/g, '')),
      );
      state.prices.splice(priceIndex, 1);

      state.totalPrice = state.prices.reduce((a, c) => a + c, 0);

      state.discount = state.totalPrice * 0.3;
    },
  },
});

export const { setService, removeService } = wizardCalcSlice.actions;

export default wizardCalcSlice.reducer;
