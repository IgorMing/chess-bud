import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {OpeningsContext, useOpeningsContext} from 'src/modules/openings';
import {UserContext, useUserContext} from 'src/modules/user';
import {useTabOptions} from '../configs/headerOptions';
import {AuthContext, useAuthenticationContext} from '../modules/authentication';
import SplashScreen from '../screens/Splash';
import BottomNavigator from './bottom-navigator';
import FavoritesStack from './favorites-stack-navigator';
import HomeStackNavigator from './home-stack-navigator';
import ProfileStackNavigator from './profile-stack-navigator';
import {HomeTabParamList} from './types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const RootNavigator: React.FC = () => {
  const theme = useTheme();
  const TabOptions = useTabOptions(theme);
  const {authContextValue, initializing} = useAuthenticationContext();
  const openingsContextValue = useOpeningsContext();
  const userContextValue = useUserContext(authContextValue.user?.uid ?? '');

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      <OpeningsContext.Provider value={openingsContextValue}>
        <UserContext.Provider value={userContextValue}>
          <Tab.Navigator tabBar={BottomNavigator} screenOptions={TabOptions}>
            <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
            <Tab.Screen name="FavoritesStack" component={FavoritesStack} />
            <Tab.Screen name="ProfileStack" component={ProfileStackNavigator} />
          </Tab.Navigator>
        </UserContext.Provider>
      </OpeningsContext.Provider>
    </AuthContext.Provider>
  );
};

export default RootNavigator;
