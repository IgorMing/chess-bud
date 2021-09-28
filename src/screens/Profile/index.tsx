import auth from '@react-native-firebase/auth';
import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';

const Profile: React.FC = () => {
  function signout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the profile</Text>
      <Button onPress={signout}>Signout</Button>
    </Layout>
  );
};

export default Profile;
