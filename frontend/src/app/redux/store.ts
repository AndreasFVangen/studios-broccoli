import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import userReducer from './actions/userSlice';
import loginDialogReducer from './actions/loginDialogSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    loginDialog: loginDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
