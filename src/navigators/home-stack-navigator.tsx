import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import useHeaderOptions from '../configs/headerOptions';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home/index';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const theme = useTheme();
  const headerOptions = useHeaderOptions(theme);

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
