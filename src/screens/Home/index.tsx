import NetInfo from '@react-native-community/netinfo';
import {Divider, Layout, List} from '@ui-kitten/components';
import React, {useContext, useEffect, useState} from 'react';
import ListCard from 'src/components/Card';
import {OpeningsContext} from 'src/modules/openings';
import Offline from '../Offline';
import {HomeProps, OpeningProps} from './types';

const Home: React.VFC<HomeProps> = ({navigation}) => {
  const [offline, setOffline] = useState(false);

  const openingsContext = useContext(OpeningsContext);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const isOffline = !(state.isConnected && state.isInternetReachable);
      setOffline(isOffline);
    });
    return removeNetInfoSubscription();
  }, []);

  function renderItem({item}: {item: OpeningProps}) {
    return (
      <ListCard
        details={item.details}
        moves={item.moves}
        onPress={() => {
          navigation.navigate('Details', {title: item.name, uid: item.key});
        }}
        title={item.name}
      />
    );
  }

  if (offline) {
    return <Offline />;
  }

  return (
    <Layout style={{flex: 1}}>
      <List
        data={openingsContext.data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  );
};

export default Home;
