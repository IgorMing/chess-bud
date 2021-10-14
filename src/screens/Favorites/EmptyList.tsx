import {Text} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, View} from 'react-native';

const EmptyList: React.FC = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <View
      style={{
        paddingHorizontal: 24,
        height: height * 0.7,
        width,
        justifyContent: 'center',
      }}>
      <Text category="h4" style={{textAlign: 'center'}}>
        You have no favorite openings set
      </Text>
    </View>
  );
};

export default EmptyList;
