import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type AuthType = FirebaseAuthTypes.User | null;

export type AuthState = {
  user: AuthType;
  initializing: boolean;
  error: string;
};

export type AuthAction =
  | {type: 'INITIALIZING'; payload?: boolean}
  | {type: 'RESTORE_TOKEN'; payload: AuthType}
  | {type: 'SET_ERROR'; payload: string}
  | {type: 'SIGN_IN'; payload: AuthType}
  | {type: 'SIGN_OUT'};
