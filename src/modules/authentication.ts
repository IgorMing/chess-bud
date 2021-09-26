import React, {useEffect, useMemo} from 'react';
import {AuthAction, AuthState} from './types';

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'RESTORE_TOKEN':
    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        token: null,
      };
  }
}

export default function useAuthentication() {
  const [state, dispatch] = React.useReducer(reducer, {
    isSignedIn: null,
    token: null,
  });

  useEffect(() => {
    // TODO: Check data from firebase auth
  }, []);

  const authContext = useMemo(() => ({
    signin: () => {},
  }));
}
