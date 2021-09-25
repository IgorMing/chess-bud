import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
