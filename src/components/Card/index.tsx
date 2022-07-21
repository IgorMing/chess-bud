import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { formatMoves, useImagePath } from 'src/configs/helpers';

interface ListCardProps {
  completeDetails?: boolean;
  details: string;
  fileName: string;
  moves: string[];
  onPress: () => void;
  title: string;
}

const BOARD_SIZE = Dimensions.get('screen').width * 0.85;
const ListCard: React.FC<ListCardProps> = ({
  completeDetails,
  details,
  fileName,
  moves,
  onPress,
  title,
}) => {
  const imagePath = useImagePath(fileName);

  return (
    <Card
      style={{ marginBottom: 8 }}
      onPress={onPress}
      footer={footerProps => (
        <Text {...footerProps} appearance="hint">
          {formatMoves(moves)}
        </Text>
      )}
      header={headerProps => (
        <View {...headerProps}>
          <Text category="h5">{title}</Text>
        </View>
      )}>
      <>
        <Text
          numberOfLines={completeDetails ? undefined : 3}
          style={{ textAlign: 'justify' }}>
          {details}
        </Text>
        {imagePath && (
          <View style={{ paddingVertical: 20 }}>
            <Image
              style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
              source={{
                uri: imagePath,
              }}
            />
          </View>
        )}
      </>
    </Card>
  );
};

export default ListCard;
