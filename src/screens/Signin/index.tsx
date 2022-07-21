import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Icon, Input, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { createRef, useContext, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Container from 'src/components/Container';
import { AuthContext } from 'src/modules/authentication';
import { ProfileStackParamList } from '../../navigators/types';

type SigninProps = NativeStackScreenProps<ProfileStackParamList, 'Signin'>;

const passwordRef = createRef<Input>();

const SigninScreen: React.FunctionComponent<SigninProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const authContext = useContext(AuthContext);
  const { error } = authContext;

  function signIn() {
    authContext.signin(username, password);
  }

  return (
    <Container>
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Email"
            onChangeText={setUsername}
            onSubmitEditing={() => passwordRef.current?.focus()}
            placeholder="example@domain.com"
            returnKeyType="next"
            style={styles.input}
            value={username}
          />
          <Input
            accessoryRight={props => (
              <TouchableWithoutFeedback
                onPress={() => setVisiblePassword(!visiblePassword)}>
                <Icon {...props} name={visiblePassword ? 'eye' : 'eye-off'} />
              </TouchableWithoutFeedback>
            )}
            caption={() => <Text status="danger">{error}</Text>}
            label="Password"
            onChangeText={setPassword}
            onSubmitEditing={signIn}
            placeholder="Type your password"
            ref={passwordRef}
            returnKeyLabel="Signin"
            returnKeyType="join"
            secureTextEntry={!visiblePassword}
            style={styles.input}
            value={password}
          />

          <Button
            disabled={!username || !password}
            onPress={signIn}
            style={styles.button}>
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
    </Container>
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
