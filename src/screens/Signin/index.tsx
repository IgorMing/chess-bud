import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {AuthContext} from 'src/modules/authentication';
import {ProfileStackParamList} from '../../navigators/types';

type SigninProps = NativeStackScreenProps<ProfileStackParamList, 'Signin'>;

const SigninScreen: React.VFC<SigninProps> = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const {error} = authContext;

  function signIn() {
    authContext.signin('igor.ming@gmail.com', 'Igor1993');
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
