import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import useStackHeaderOptions from '../configs/headerOptions';
import DetailsScreen from '../screens/Details';
import FavoritesScreen from '../screens/Favorites';
import {FavoritesStackParamList} from './types';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const theme = useTheme();
  const headerOptions = useStackHeaderOptions(theme);

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
