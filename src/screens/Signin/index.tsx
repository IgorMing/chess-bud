import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const SigninScreen: React.VFC = () => {
  const [error, setError] = useState('');
  function signUp() {
    auth()
      .createUserWithEmailAndPassword('igor.ming@gmail.com', '1234')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/weak-password') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }
      });
  }

  function signIn() {
    auth()
      .signInWithEmailAndPassword('igor.ming@gmail.com', '1234')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        console.warn(error);

        // error = name, code and message
      });
  }
  return (
    <View>
      <Text>Signin screen</Text>
      <Button title="Login" onPress={signIn} />
    </View>
  );
};

export default SigninScreen;
