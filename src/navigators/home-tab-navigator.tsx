import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FavoritesScreen from '../screens/Favorites/index';
import {HomeTabParamList} from '../screens/Home/types';
import ProfileScreen from '../screens/Profile/index';
import BottomNavigator from './bottom-navigator';
import HomeStackNavigator from './home-stack-navigator';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={BottomNavigator}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
