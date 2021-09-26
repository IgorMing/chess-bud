import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import {Button, Layout, Text} from '@ui-kitten/components';

const SigninScreen: React.VFC = () => {
  const [error, setError] = useState<string>('');
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
        setError(error.message);

        // error = name, code and message
      });
  }
  return (
    <Layout>
      <Text>Signin screen</Text>
      {!!error && <Text status="danger">{error}</Text>}
      <Button onPress={signIn}>Login</Button>
    </Layout>
  );
};

export default SigninScreen;
