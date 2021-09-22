import type {ReactNode} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log({isDarkMode});

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>This is the app</Text>
    </SafeAreaView>
  );
};

export default App;
