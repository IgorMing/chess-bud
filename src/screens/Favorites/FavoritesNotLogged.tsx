import {Button, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Container from 'src/components/Container';

interface FavoritesNotLoggedProps {
  onPress: () => void;
}

const FavoritesNotLogged: React.VFC<FavoritesNotLoggedProps> = ({onPress}) => {
  return (
    <Container level="3">
      <View style={styles.textContainer}>
        <Text appearance="default" category="p2" style={styles.text}>
          Looking for bookmarking your prefered openings?
        </Text>
      </View>
      <Button onPress={onPress}>Let's sign in</Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 32,
    paddingBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FavoritesNotLogged;
