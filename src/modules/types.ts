import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {OpeningProps} from 'src/screens/Home/types';

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

export type AuthContextProps = {
  isLoggedIn?: boolean;
  error: string;
  user: AuthType;
  signin: (user: string, password: string) => void;
  signout: () => void;
};

export type OpeningsState = {
  data: OpeningProps[];
  loading: boolean;
};

export type OpeningsAction =
  | {type: 'SET_OPENINGS'; payload: OpeningProps[]}
  | {type: 'SET_LOADING'; payload?: boolean};

export type OpeningsContextProps = {
  data: OpeningProps[];
  isLoading: boolean;
};
