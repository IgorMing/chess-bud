import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {useTabOptions} from '../configs/headerOptions';
import {AuthContext, useAuthenticationContext} from '../modules/authentication';
import FavoritesScreen from '../screens/Favorites/index';
import SplashScreen from '../screens/Splash';
import BottomNavigator from './bottom-navigator';
import HomeStackNavigator from './home-stack-navigator';
import ProfileStackNavigator from './profile-stack-navigator';
import {HomeTabParamList} from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const RootNavigator: React.FC = () => {
  const theme = useTheme();
  const TabOptions = useTabOptions(theme);
  const {authContext, initializing} = useAuthenticationContext();

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Tab.Navigator tabBar={BottomNavigator} screenOptions={TabOptions}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackNavigator}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </AuthContext.Provider>
  );
};

export default RootNavigator;
