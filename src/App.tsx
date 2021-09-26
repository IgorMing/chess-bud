// import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider} from '@ui-kitten/components';
import type {ReactNode} from 'react';
import React from 'react';
import {Appearance, StatusBar} from 'react-native';
import RootNavigator from './navigators/root-navigator';

const App: () => ReactNode = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

{
  /* <BannerAd
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
/> */
}
export default App;
