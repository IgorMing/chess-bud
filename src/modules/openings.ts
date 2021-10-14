import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {OpeningProps} from 'src/screens/Home/types';
import {OpeningsAction, OpeningsContextProps, OpeningsState} from './types';

function reducer(state: OpeningsState, action: OpeningsAction): OpeningsState {
  switch (action.type) {
    case 'SET_OPENINGS':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload ?? true,
      };
  }
}

export function useOpeningsContext(): OpeningsContextProps {
  const [state, dispatch] = React.useReducer(reducer, {
    data: [],
    loading: true,
  });

  useEffect(() => {
    const subscriber = firestore()
      .collection('openings')
      .onSnapshot(snapshot => {
        dispatch({type: 'SET_LOADING'});
        const _openings: OpeningProps[] = [];
        snapshot.forEach(document => {
          _openings.push({
            ...(document.data() as OpeningProps),
            key: document.id,
          });
        });

        dispatch({type: 'SET_OPENINGS', payload: _openings});
        dispatch({type: 'SET_LOADING', payload: false});
      });

    return () => subscriber();
  }, []);

  return {
    data: state.data,
    isLoading: state.loading,
    getBookmarkedData: bookmarked =>
      state.data.filter(each => bookmarked && bookmarked.includes(each.key)),
  };
}

export const OpeningsContext = React.createContext<OpeningsContextProps>({
  data: [],
  getBookmarkedData: () => [],
  isLoading: true,
});
