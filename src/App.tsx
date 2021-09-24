// import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
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
  );
};

export default App;
