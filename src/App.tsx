import * as eva from '@eva-design/eva';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import type {ReactNode} from 'react';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {default as theme} from '../theme.json';
import RootNavigator from './navigators/root-navigator';
import {store} from './store';

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
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
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        />
      )}
    </Provider>
  );
};

export default App;
