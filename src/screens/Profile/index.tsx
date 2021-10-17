import {Button, Icon, Input, useTheme} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Container from 'src/components/Container';
import {AuthContext} from 'src/modules/authentication';

const Profile: React.FC = () => {
  const authContext = useContext(AuthContext);
  const theme = useTheme();

  return (
    <Container>
      <View style={styles.inputContainer}>
        <Input
          disabled
          label="Email"
          value={authContext.user?.email ?? ''}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          disabled
          label="Password"
          value="**********"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name="edit-outline"
            style={styles.icon}
            fill={theme['color-primary-default']}
          />
        </TouchableOpacity>
      </View>
      <Button appearance="outline" onPress={authContext.signout}>
        Signout
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  input: {
    flex: 8,
  },
  icon: {
    flex: 1,
    width: 32,
    height: 32,
    marginLeft: 8,
  },
});

export default Profile;
