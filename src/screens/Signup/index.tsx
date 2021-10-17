import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Icon, Input, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React, {createRef, useState} from 'react';
import {
  ImageProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Container from 'src/components/Container';
import {ProfileStackParamList} from 'src/navigators/types';
import {handleError} from '../../configs/helpers';

type SignupProps = NativeStackScreenProps<ProfileStackParamList, 'Signup'>;

const passwordRef = createRef<Input>();
const confirmPasswordRef = createRef<Input>();

const SignupScreen: React.VFC<SignupProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState('');
  const disabled = !username || !password || !confirmPassword;

  function renderIcon(props?: Partial<ImageProps>) {
    return (
      <TouchableWithoutFeedback
        onPress={() => setVisiblePassword(!visiblePassword)}>
        <Icon {...props} name={visiblePassword ? 'eye' : 'eye-off'} />
      </TouchableWithoutFeedback>
    );
  }

  function signUp() {
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords must match exactly');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(user => {
        console.log('User account created & signed in!', user);
      })
      .catch(err => {
        setError(handleError(err.code));
      });
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
            accessoryRight={renderIcon}
            label="Password"
            placeholder="Type your password"
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            ref={passwordRef}
            returnKeyType="next"
            secureTextEntry={!visiblePassword}
            style={styles.input}
            value={password}
          />
          <Input
            accessoryRight={renderIcon}
            caption={() => <Text status="danger">{error}</Text>}
            label="Confirm Password"
            onChangeText={setConfirmPassword}
            onSubmitEditing={signUp}
            placeholder="Confirm your password"
            ref={confirmPasswordRef}
            returnKeyLabel="Create"
            returnKeyType="join"
            secureTextEntry={!visiblePassword}
            style={styles.input}
            value={confirmPassword}
          />
          <Button disabled={disabled} onPress={signUp} style={styles.button}>
            Create account
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  input: {
    paddingVertical: 8,
  },
  button: {
    width: '100%',
    marginBottom: 4,
  },
});

export default SignupScreen;
