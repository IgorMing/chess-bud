import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {OpeningProps} from 'src/screens/Home/types';

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
