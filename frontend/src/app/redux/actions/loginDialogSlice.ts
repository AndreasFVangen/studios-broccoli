import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

// user interface.
interface loginDialogState {
  value: boolean;
}

const initialState: loginDialogState = {
  value: false,
};

export const loginDialogSlice = createSlice({
  name: 'loginDialog',
  initialState,
  reducers: {
    open: state => {
      console.log(state.value)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    close: state => {
      state.value = false;
    },
  },
});

export const { open, close } = loginDialogSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLoginDialog = (state: RootState) => state.loginDialog.value;

export default loginDialogSlice.reducer;
