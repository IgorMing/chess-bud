import auth from '@react-native-firebase/auth';
import React, {useEffect, useMemo, useState} from 'react';
import {handleError} from 'src/configs/helpers';
import {AuthAction, AuthContextProps, AuthState} from './types';

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'RESTORE_TOKEN':
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'INITIALIZING':
      return {
        ...state,
        initializing: action.payload ?? true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
      };
  }
}

export function useAuthenticationContext() {
  const [state, dispatch] = React.useReducer(reducer, {
    error: '',
    user: null,
    initializing: true,
  });
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
      dispatch({type: 'SIGN_IN', payload: firebaseUser});
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, [initializing]);

  const authContextValue = useMemo(
    () => ({
      error: state.error,
      isLoggedIn: !!state.user,
      signin: async (user: string, password: string) => {
        dispatch({type: 'SET_ERROR', payload: ''});
        auth()
          .signInWithEmailAndPassword(user, password)
          .then(() => {
            console.log('User signed in!');
          })
          .catch(err => {
            dispatch({type: 'SET_ERROR', payload: handleError(err.code)});
          });
      },
      signout: () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
        dispatch({type: 'SIGN_OUT'});
      },
      user: state.user,
    }),
    [state.error, state.user],
  );

  return {authContextValue, initializing};
}

export const AuthContext = React.createContext<AuthContextProps>({
  error: '',
  signin: () => {},
  signout: () => {},
  user: null,
});
