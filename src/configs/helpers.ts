import storage from '@react-native-firebase/storage';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {ImageAccessWayType} from '../screens/Home/types';

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

export function formatMoves(moves: string[], initial = 0) {
  const initialIndex = initial > 0 ? initial - 1 : initial;
  return moves.map(
    (move, index) =>
      `${index === 0 ? '' : ' '}${index + initialIndex + 1}.${move}`,
  );
}

export const USABLE_KEYS = ['details', 'starting_position', 'pros', 'cons'];

export function isObjKey<T>(key: any, obj: T): key is keyof T {
  return key in obj;
}

export const useImagePath = (
  imageReference?: string,
  imageAccessWay?: ImageAccessWayType,
) => {
  const [boardPath, setBoardPath] = useState<string | null>(null);

  useEffect(() => {
    if (!imageReference || !imageAccessWay) {
      return;
    }

    switch (imageAccessWay) {
      case 'cloud-storage':
        const reference = storage().ref(imageReference);
        reference.getDownloadURL().then(setBoardPath);
        break;
      case 'url':
        imageReference && setBoardPath(imageReference);
        break;
      case 'none':
      default:
        return;
    }
  }, [imageReference, imageAccessWay]);

  return boardPath;
};

export const BOARD_SIZE = Dimensions.get('screen').width * 0.95;
