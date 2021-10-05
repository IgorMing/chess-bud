import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@ui-kitten/components';
import React, {useContext} from 'react';
import useStackHeaderOptions from '../configs/headerOptions';
import {AuthContext} from '../modules/authentication';
import ProfileScreen from '../screens/Profile/index';
import SigninScreen from '../screens/Signin';
import SignupScreen from '../screens/Signup';
import {ProfileStackParamList} from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
  const theme = useTheme();
  const headerOptions = useStackHeaderOptions(theme);
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      {authContext.isLoggedIn ? (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
