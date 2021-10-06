import {Divider, Layout, List} from '@ui-kitten/components';
import React, {useContext} from 'react';
import ListCard from 'src/components/Card';
import {OpeningsContext} from 'src/modules/openings';
import {HomeProps, OpeningProps} from './types';

const Home: React.VFC<HomeProps> = ({navigation}) => {
  const openingsContext = useContext(OpeningsContext);

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
