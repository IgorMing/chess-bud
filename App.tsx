import * as eva from '@eva-design/eva';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactNode, useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { default as theme } from './theme.json';
import RootNavigator from './src/navigators/root-navigator';

const App: () => ReactNode = () => {
  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <StatusBar barStyle={'light-content'} />
          <RootNavigator />
        </NavigationContainer>
      </ApplicationProvider>
      {!__DEV__ && (
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.SMART_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={(error: Error) => {
            console.error('Advert failed to load: ', error);
          }}
        />
      )}
    </>
  );
};

export default App;
