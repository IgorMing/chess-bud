import storage from '@react-native-firebase/storage';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export function handleError(error: string): string {
  switch (error) {
    case 'auth/user-not-found':
    case 'auth/invalid-email':
    case 'auth/wrong-password':
      return 'The email and/or password is incorrect';
    case 'auth/email-already-in-use':
      return 'That email address is already in use!';
    case 'auth/weak-password':
      return 'The password is weak';
    default:
      console.log(error);
      return 'An unexpected error happened';
  }
}

export function getInitialMove(moves: string[]): number {
  return moves[moves.length - 1].split(' ').length === 2
    ? moves.length
    : moves.length - 1;
}

export function formatMoves(moves: string[], initial?: number) {
  const initialIndex = initial ?? 0;

  return moves.map(
    (move, index) =>
      `${index === 0 ? '' : ' '}${index + initialIndex + 1}.${move}`,
  );
}

export const USABLE_KEYS = ['details', 'starting_position', 'pros', 'cons'];

export function isObjKey<T>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const useImagePath = (fileName?: string) => {
  const [boardPath, setBoardPath] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!fileName) {
      return;
    }

    const reference = storage().ref(fileName);
    reference.getDownloadURL().then(setBoardPath);
  }, [fileName]);

  return boardPath;
};

export const BOARD_SIZE = Dimensions.get('screen').width * 0.95;
