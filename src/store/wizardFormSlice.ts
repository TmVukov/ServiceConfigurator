import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WizardFormState } from './wizardTypes';

const initialState: WizardFormState = {
  modal: false,
  showMessage: false,
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
    setShowMessage(state, { payload: messageStatus }: PayloadAction<boolean>) {
      state.showMessage = messageStatus;
    },
    setDiscountSuccess(
      state,
      { payload: discountSuccessValue }: PayloadAction<boolean>,
    ) {
      state.discountSuccess = discountSuccessValue;
    },
  },
});

export const {
  setModal,
  setNext,
  setPrev,
  setPage,
  setShowMessage,
  setDiscountSuccess,
} = wizardFormSlice.actions;

export default wizardFormSlice.reducer;
