import {Layout} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image} from 'react-native';
import mockData from '../../configs/chess-openings-app-export.json';

const opening = mockData.ruy_lopez;
const BOARD_SIZE = Dimensions.get('screen').width * 0.9;

const DetailsScreen: React.VFC = () => {
  return (
    <Layout style={{flex: 1, alignItems: 'center', paddingVertical: 24}}>
      <Image
        style={{width: BOARD_SIZE, height: BOARD_SIZE}}
        source={{
          uri: opening.imagePath,
        }}
      />
    </Layout>
  );
};

export default DetailsScreen;
