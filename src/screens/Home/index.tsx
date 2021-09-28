import {Card, Divider, Layout, List, Text} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import mockData from '../../configs/chess-openings-app-export.json';
import {HomeProps, OpeningsInfo} from './types';

const BOARD_SIZE = Dimensions.get('screen').width / 2;

const Home: React.VFC<HomeProps> = ({navigation}) => {
  function renderItem({item}: OpeningsInfo) {
    return (
      <Card
        onPress={() => navigation.navigate('Details')}
        status="basic"
        footer={footerProps => (
          <Text {...footerProps} appearance="hint">
            {item.moves.map((move, index) => ` ${index + 1}.${move}`)}
          </Text>
        )}
        header={headerProps => (
          <View {...headerProps}>
            <Text category="h5">{item.name}</Text>
          </View>
        )}>
        <>
          <Text numberOfLines={3} style={{textAlign: 'justify'}}>
            {item.details}
          </Text>
          {item.imagePath && (
            <View style={{alignItems: 'center', paddingVertical: 20}}>
              <Image
                style={{width: BOARD_SIZE, height: BOARD_SIZE}}
                source={{
                  uri: item.imagePath,
                }}
              />
            </View>
          )}
        </>
      </Card>
    );
  }

  return (
    <Layout style={{flex: 1}}>
      <List
        data={Object.values(mockData)}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  );
};

export default Home;
