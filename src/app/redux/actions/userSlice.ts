import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

// user interface.
interface User {
  id?: string;
  fName: string;
  lName: string;
  email: string;
}

// Extension of User interface used for authentication.
interface UserState extends Partial<User> {
  id: string;
  authorized: boolean;
  token?: string;
}

const initialState: UserState = {
  authorized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authorized = true;
    },
    unauthorize: state => {
      state.value = false;
    },
  },
});

export const { authorize, unauthorize } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
