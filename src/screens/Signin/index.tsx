import auth from '@react-native-firebase/auth';
import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {handleError} from './helpers';

const SigninScreen: React.VFC = () => {
  const [error, setError] = useState<string>('');
  function signUp() {
    setError('');
    auth()
      .createUserWithEmailAndPassword('igor.ming@gmail.com', 'Igor1993')
      .then(user => {
        console.log(user);
        console.log('User account created & signed in!');
      })
      .catch(err => {
        setError(handleError(err.code));
      });
  }

  function signIn() {
    setError('');
    auth()
      .signInWithEmailAndPassword('igoxr.ming@gmail.com', 'Igor19931')
      .then(user => {
        console.log(user);
        console.log('User account created & signed in!');
      })
      .catch(err => {
        setError(handleError(err.code));
      });
  }
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signin screen</Text>
      {!!error && <Text status="danger">{error}</Text>}
      <Button onPress={signIn}>Signin</Button>
      <Button onPress={signUp}>Signup</Button>
    </Layout>
  );
};

export default SigninScreen;
