import auth from '@react-native-firebase/auth';
import React, {useEffect, useMemo, useState} from 'react';
import {AuthAction, AuthContextProps, AuthState, AuthType} from './types';

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'RESTORE_TOKEN':
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
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
    user: null,
    initializing: true,
  });
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(fbUser => {
      dispatch({type: 'SIGN_IN', payload: fbUser});
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, [initializing]);

  const authContextValue = useMemo(
    () => ({
      isLoggedIn: !!state.user,
      signin: async (user: AuthType) => {
        dispatch({type: 'SIGN_IN', payload: user});
      },
      signout: () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
        dispatch({type: 'SIGN_OUT'});
      },
    }),
    [state.user],
  );

  return {authContextValue, initializing};
}

export const AuthContext = React.createContext<AuthContextProps>({
  signin: () => {},
  signout: () => {},
});
