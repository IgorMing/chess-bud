import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeTabParamList = {
  HomeStack: undefined;
  FavoritesStack: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: {title: string; uid: string};
};

export type FavoritesStackParamList = {
  Favorites: undefined;
  Details: {title: string; uid: string};
  ProfileStack: undefined;
};

export type FavoritesStackProps = NativeStackScreenProps<
  FavoritesStackParamList,
  'Favorites'
>;

export type ProfileStackParamList = {
  Signin: undefined;
  Signup: undefined;
  Profile: undefined;
};
