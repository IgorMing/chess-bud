import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FavoritesStackParamList} from 'src/navigators/types';

export type FavoritesProps = NativeStackScreenProps<
  FavoritesStackParamList,
  'Favorites'
>;
