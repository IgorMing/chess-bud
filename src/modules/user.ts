import firestore from '@react-native-firebase/firestore';
import {createContext, useEffect, useMemo, useReducer} from 'react';
import {UserAction, UserContextProps, UserState} from './types';

function reducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'SET_BOOKMARKED':
      return {
        ...state,
        bookmarked: action.payload,
      };
    default:
      return state;
  }
}

export function useUserContext(userId: string): UserContextProps {
  const [state, dispatch] = useReducer(reducer, {
    bookmarked: [],
  });

  const collection = useMemo(
    () => firestore().collection('users').doc(userId),
    [userId],
  );

  useEffect(() => {
    const subscriber = collection.onSnapshot(snapshot => {
      dispatch({
        type: 'SET_BOOKMARKED',
        payload: snapshot.data()?.bookmarked,
      });
    });

    return () => subscriber();
  }, [collection]);

  return {
    bookmarked: state.bookmarked,
    isBookmarked: openingId =>
      state.bookmarked && state.bookmarked.includes(openingId),
    toggleBookmark: openingId => {
      const instance = [...state.bookmarked];
      const index = instance.indexOf(openingId);
      if (index > -1) {
        instance.splice(index, 1);
      } else {
        instance.push(openingId);
      }

      collection.update({
        bookmarked: instance,
      });
    },
  };
}

export const UserContext = createContext<UserContextProps>({
  bookmarked: [],
  isBookmarked: () => false,
  toggleBookmark: () => {},
});
