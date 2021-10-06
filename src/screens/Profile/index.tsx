import {Button, Layout, Text} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {AuthContext} from 'src/modules/authentication';

const Profile: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the profile</Text>
      <Button onPress={authContext.signout}>Signout</Button>
    </Layout>
  );
};

export default Profile;
