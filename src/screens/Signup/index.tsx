import auth from '@react-native-firebase/auth';
import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {handleError} from '../../configs/helpers';

const SignupScreen: React.VFC = () => {
  const [error, setError] = useState<string>('');
  function signUp() {
    setError('');
    auth()
      .createUserWithEmailAndPassword('igor.ming@gmail.com', 'Igor1993')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(err => {
        setError(handleError(err.code));
      });
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signup screen</Text>
      {!!error && <Text status="danger">{error}</Text>}
      <Button onPress={signUp}>Signup</Button>
    </Layout>
  );
};

export default SignupScreen;
