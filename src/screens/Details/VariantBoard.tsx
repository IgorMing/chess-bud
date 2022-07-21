import React from 'react';
import { Image, View } from 'react-native';
import { BOARD_SIZE, useImagePath } from '../../configs/helpers';
import styles from './styles';

const VariantBoard: React.FunctionComponent<{ fileName?: string }> = ({
  fileName,
}) => {
  const uri = useImagePath(fileName);
  return (
    <View style={styles.variantImageContainer}>
      <Image
        style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default VariantBoard;
