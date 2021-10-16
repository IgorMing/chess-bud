import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React, {useContext, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {AuthContext} from 'src/modules/authentication';
import {ProfileStackParamList} from '../../navigators/types';

type SigninProps = NativeStackScreenProps<ProfileStackParamList, 'Signin'>;

const SigninScreen: React.VFC<SigninProps> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const authContext = useContext(AuthContext);
  const {error} = authContext;

  function signIn() {
    authContext.signin(username, password);
  }

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            label="Email"
            onChangeText={setUsername}
            placeholder="example@domain.com"
            style={styles.input}
            value={username}
          />
          <Input
            caption={() => <Text status="danger">{error}</Text>}
            label="Password"
            placeholder="Type your password"
            value={password}
            accessoryRight={props => (
              <TouchableWithoutFeedback
                onPress={() => setVisiblePassword(!visiblePassword)}>
                <Icon {...props} name={visiblePassword ? 'eye' : 'eye-off'} />
              </TouchableWithoutFeedback>
            )}
            secureTextEntry={!visiblePassword}
            style={styles.input}
            onChangeText={setPassword}
          />

          <Button onPress={signIn} style={styles.button}>
            Signin
          </Button>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}>
            Create an account
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Dimensions.get('window').height * 0.2,
  },
  input: {
    paddingVertical: 8,
  },
  button: {
    width: '100%',
    marginBottom: 4,
  },
  scrollContainer: {
    width: '100%',
  },
});

export default SigninScreen;
