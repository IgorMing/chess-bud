import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {AuthContext} from '../modules/authentication';
import ProfileScreen from '../screens/Profile/index';
import SigninScreen from '../screens/Signin';
import SignupScreen from '../screens/Signup';
import {ProfileStackParamList} from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator>
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
