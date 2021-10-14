import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface FavoritesNotLoggedProps {
  onPress: () => void;
}

const FavoritesNotLogged: React.VFC<FavoritesNotLoggedProps> = ({onPress}) => {
  return (
    <Layout style={styles.container} level="3">
      <View style={styles.textContainer}>
        <Text appearance="default" category="p2" style={styles.text}>
          Looking for bookmarking your prefered openings?
        </Text>
      </View>
      <Button onPress={onPress}>Let's sign in</Button>
    </Layout>
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
