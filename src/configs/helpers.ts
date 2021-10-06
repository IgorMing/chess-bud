import storage from '@react-native-firebase/storage';
import {useEffect, useState} from 'react';
import {ImageAccessWayType, OpeningProps} from '../screens/Home/types';

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

export function formatMoves(moves: string[]) {
  return moves.map(
    (move, index) => `${index === 0 ? '' : ' '}${index + 1}.${move}`,
  );
}

export function getUsableKeys(object: OpeningProps) {
  const shown_keys = ['pros', 'cons', 'details'];
  const keys = Object.keys(object);
  return keys.filter(key => shown_keys.includes(key));
}

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
