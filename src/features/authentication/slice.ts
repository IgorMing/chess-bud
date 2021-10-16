import auth from '@react-native-firebase/auth';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthType, AuthState} from './types';

const initialState: AuthState = {
  user: null,
  initializing: true,
  error: '',
};

export const signin = createAsyncThunk(
  async (user: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(user, password);
      //   .then(() => {
      //     console.log('User signed in!');
      //   })
      //   .catch(err => {
      //     dispatch({type: 'SET_ERROR', payload: handleError(err.code)});
      //   });
    } catch (err) {
      return err.code;
    }
  },
);

createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {},
  },
});
