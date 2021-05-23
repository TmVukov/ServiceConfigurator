import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WizardFormState } from './wizardTypes';

const initialState: WizardFormState = {
  modal: false,
  errorMessage: false,
  discountSuccess: false,
  step: 1,
};

const wizardFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setModal(state, { payload: modalStatus }: PayloadAction<boolean>) {
      state.modal = modalStatus;
    },
    setNext(state) {
      state.step = state.step + 1;
    },
    setPrev(state) {
      state.step = state.step - 1;
    },
    setPage(state, { payload: skip }: PayloadAction<number>) {
      state.step = state.step - skip;
    },
    setErrorMessage(state, { payload: messageStatus }: PayloadAction<boolean>) {
      state.errorMessage = messageStatus;
    },
    setDiscountSuccess(
      state,
      { payload: discountStatus }: PayloadAction<boolean>,
    ) {
      state.discountSuccess = discountStatus;
    },
  },
});

export const {
  setModal,
  setNext,
  setPrev,
  setPage,
  setErrorMessage,
  setDiscountSuccess,
} = wizardFormSlice.actions;

export default wizardFormSlice.reducer;
