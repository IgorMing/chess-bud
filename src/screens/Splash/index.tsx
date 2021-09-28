import {useTheme} from '@ui-kitten/components';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const SplashScreen: React.VFC = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme['color-primary-default']} />
    </View>
  );
};

export default SplashScreen;
