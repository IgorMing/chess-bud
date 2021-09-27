import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {RootStackParamList} from '../../navigators/types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.VFC<HomeProps> = props => {
  function onPress() {
    props.navigation.navigate('Details');
  }

  function signout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <Layout style={{flex: 1}}>
      <Text>This is the home screen</Text>
      <Button onPress={onPress}>Go to details</Button>
      <Button onPress={signout}>Signout</Button>
    </Layout>
  );
};

export default Home;
