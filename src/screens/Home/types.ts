import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigators/types';

export type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export type ImageAccessWayType = 'none' | 'cloud-storage' | 'url';

export type OpeningProps = {
  key: string;
  name: string;
  moves: string[];
  details: string;
  pros: string[];
  cons: string[];
  starting_position?: string;
  fileName: string;
};

export type OpeningsInfo = {
  item: OpeningProps;
  index: number;
};
