import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type AuthType = FirebaseAuthTypes.User | null;

export type AuthState = {
  user: AuthType;
  initializing: boolean;
};

export type AuthAction =
  | {type: 'INITIALIZING'; payload?: boolean}
  | {type: 'RESTORE_TOKEN'; payload: AuthType}
  | {type: 'SIGN_IN'; payload: AuthType}
  | {type: 'SIGN_OUT'};

export type AuthContextProps = {
  isLoggedIn?: boolean;
  signin: (user: AuthType) => void;
  signout: () => void;
};
