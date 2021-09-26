import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const SplashScreen: React.VFC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
