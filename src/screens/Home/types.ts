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
  imageReference?: string;
  imageAccessWay: 'none' | 'cloud-storage' | 'url';
};

export type OpeningsInfo = {
  item: OpeningProps;
  index: number;
};
