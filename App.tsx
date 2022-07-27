import * as eva from '@eva-design/eva';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { ReactNode, useLayoutEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import adIds from './firebase.json';
import RootNavigator from './src/navigators/root-navigator';
import { default as theme } from './theme.json';

function getAdIdByOS() {
  return Platform.select({
    android: adIds['react-native'].admob_android_app_id,
    ios: adIds['react-native'].admob_ios_app_id,
  });
}

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
      <BannerAd
        unitId={__DEV__ ? TestIds.BANNER : getAdIdByOS()}
        size={BannerAdSize.SMART_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </>
  );
};

export default App;
