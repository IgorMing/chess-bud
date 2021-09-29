import {OpeningProps} from '../screens/Home/types';

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
  const hidden_keys = ['name', 'moves', 'imagePath'];
  const keys = Object.keys(object);
  return keys.filter(key => !hidden_keys.includes(key));
}

export function isObjKey<T>(key: any, obj: T): key is keyof T {
  return key in obj;
}
