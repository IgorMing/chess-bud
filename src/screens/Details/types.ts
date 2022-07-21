import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigators/types';

export type DetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'Details'
>;

export type VariantsProps = {
  openingUid: string;
  initialIndex?: number;
};

export type VariantsData = {
  name: string;
  moves: string[];
  details: string;
  fileName?: string;
};

export type ImageUrlType = {
  name: string;
  url: string;
};
