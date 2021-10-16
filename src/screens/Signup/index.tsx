import auth from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React, {useState} from 'react';
import {
  ImageProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {ProfileStackParamList} from 'src/navigators/types';
import {handleError} from '../../configs/helpers';

type SignupProps = NativeStackScreenProps<ProfileStackParamList, 'Signup'>;

const SignupScreen: React.VFC<SignupProps> = () => {
  const [username, setUsername] = useState('');
  const [lichessUser, setLichess] = useState('');
  const [chessUser, setChess] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState('');

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
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(err => {
        setError(handleError(err.code));
      });
  }

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Email*"
            onChangeText={setUsername}
            placeholder="example@domain.com"
            returnKeyType="next"
            style={styles.input}
            value={username}
          />
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Lichess"
            onChangeText={setLichess}
            placeholder="lichess user"
            returnKeyType="next"
            style={styles.input}
            value={lichessUser}
          />
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            label="Chess.com"
            onChangeText={setChess}
            placeholder="chess.com user"
            returnKeyType="next"
            style={styles.input}
            value={chessUser}
          />
          <Input
            accessoryRight={renderIcon}
            label="Password*"
            placeholder="Type your password"
            value={password}
            returnKeyType="next"
            secureTextEntry={!visiblePassword}
            style={styles.input}
            onChangeText={setPassword}
          />
          <Input
            accessoryRight={renderIcon}
            caption={() => <Text status="danger">{error}</Text>}
            label="Confirm Password*"
            placeholder="Confirm your password"
            value={confirmPassword}
            returnKeyLabel="Create"
            returnKeyType="join"
            secureTextEntry={!visiblePassword}
            style={styles.input}
            onChangeText={setConfirmPassword}
          />
          <Button onPress={signUp} style={styles.button}>
            Create account
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
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
