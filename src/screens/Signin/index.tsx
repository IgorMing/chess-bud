import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {handleError} from '../../configs/helpers';
import {ProfileStackParamList} from '../../navigators/types';

type SigninProps = NativeStackScreenProps<ProfileStackParamList, 'Signin'>;

const SigninScreen: React.VFC<SigninProps> = ({navigation}) => {
  const [error, setError] = useState<string>('');

  function signIn() {
    setError('');
    auth()
      .signInWithEmailAndPassword('igor.ming@gmail.com', 'Igor1993')
      .then(() => {
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
      <Button
        appearance="outline"
        onPress={() => navigation.navigate('Signup')}>
        Create an account
      </Button>
    </Layout>
  );
};

export default SigninScreen;
