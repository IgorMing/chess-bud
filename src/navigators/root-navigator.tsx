import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import SigninScreen from '../screens/Signin';
import SplashScreen from '../screens/Splash';
import {RootStackParamList} from '../types';
import HomeTab from './home-tab-navigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(fbUser => {
      console.log({user: fbUser});
      setUser(fbUser);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber;
  }, [initializing]);

  if (initializing) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="HomeTab" component={HomeTab} />
        </>
      ) : (
        <>
          <Stack.Screen name="Signin" component={SigninScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
