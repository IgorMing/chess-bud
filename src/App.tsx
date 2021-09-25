// import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import type {ReactNode} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => ReactNode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  console.log({isDarkMode});

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ThemeProvider>
          <Button title="Test button" />
        </ThemeProvider>
        {/* <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
