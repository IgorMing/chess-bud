export type HomeTabParamList = {
  HomeStack: undefined;
  Favorites: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: {title: string; uid: string};
};

export type ProfileStackParamList = {
  Signin: undefined;
  Signup: undefined;
  Profile: undefined;
};
