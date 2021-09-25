// import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import {NavigationContainer} from '@react-navigation/native';
import type {ReactNode} from 'react';
import React from 'react';
import {Appearance, StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './navigators/root-navigator';

const App: () => ReactNode = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider useDark={isDarkMode}>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
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
