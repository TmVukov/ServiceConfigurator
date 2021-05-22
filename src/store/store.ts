import { configureStore } from '@reduxjs/toolkit';
import wizardFormReducer from './wizardFormSlice';
import wizardCalcReducer from './wizardCalcSlice';
import wizardDataReducer from './wizardDataSlice';

const store = configureStore({
  reducer: {
    wizardForm: wizardFormReducer,
    wizardCalc: wizardCalcReducer,
    wizardData: wizardDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
