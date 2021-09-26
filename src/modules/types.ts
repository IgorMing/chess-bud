type FBUser = {};

export type AuthState = {
  isSignedIn: boolean | null;
  token: string | null;
};

export type AuthAction =
  | {type: 'RESTORE_TOKEN'; payload: string}
  | {type: 'SIGN_IN'; payload: string}
  | {type: 'SIGN_OUT'};
