import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {RootStackParamList} from '../../navigators/types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.VFC<HomeProps> = props => {
  function onPress() {
    props.navigation.navigate('Details');
  }

  return (
    <SafeAreaView>
      <Text>This is the home screen</Text>
      <Button title="Go to details" onPress={onPress} />
    </SafeAreaView>
  );
};

export default Home;
