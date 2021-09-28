import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigators/types';

export type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export type OpeningProps = {
  name: string;
  moves: string[];
  details: string;
  pros: string[];
  cons: string[];
  starting_position?: string;
  imagePath?: string; // path got directly from chess.com reference
};

export type OpeningsInfo = {
  item: OpeningProps;
  index: number;
};
