import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigators/types';

export type DetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'Details'
>;
