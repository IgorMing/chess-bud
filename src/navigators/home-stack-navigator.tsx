import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon, useTheme} from '@ui-kitten/components';
import React from 'react';
import useStackHeaderOptions from '../configs/headerOptions';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home/index';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const theme = useTheme();
  const headerOptions = useStackHeaderOptions(theme);

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({
          title: route.params.title,
          headerRight: () => (
            <Icon
              name="star" // toggle with `star-outline` for not bookmarked
              fill={theme['color-warning-600']}
              style={{width: 28, height: 28}}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
