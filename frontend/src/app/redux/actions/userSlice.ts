import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

// user interface.
interface User {
  id?: string;
  fName: string;
  lName: string;
  email: string;
}

// Extension of User interface used for authentication. Mostly for understanding expanding
// An existing interface and see how that interaction will probably fuck me later :))))
interface UserState extends Partial<User> {
  authorized: boolean;
  id?: string;
  token?: string;
}

const initialState: UserState | User = {
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
      state.authorized= false;
    },
  },
});

export const { authorize, unauthorize } = userSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
