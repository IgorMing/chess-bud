import * as eva from '@eva-design/eva';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactNode, useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigators/root-navigator';
import { default as theme } from './theme.json';

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
          <BannerAd
            unitId={
              __DEV__
                ? TestIds.BANNER
                : 'ca-app-pub-3484372062231204/6554162186'
            }
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
