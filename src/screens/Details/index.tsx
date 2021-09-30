import {
  Divider,
  Icon,
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
import mockData from '../../configs/chess-openings-app-export.json';
import {formatMoves, getUsableKeys, isObjKey} from '../../configs/helpers';
import themedStyles from './styles';
import Title from './Title';
import Variants from './Variants';

const opening = mockData.ruy_lopez;
const BOARD_SIZE = Dimensions.get('screen').width * 0.95;

const DetailsScreen: React.VFC = () => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const keys = getUsableKeys(opening);
  console.log(keys);

  function renderRow(key: string) {
    if (!isObjKey(key, opening)) {
      return null;
    }

    const value = opening[key];

    if (Array.isArray(value)) {
      return value.map(each => (
        <View style={styles.groupContainer}>
          <Icon
            style={styles.icon}
            fill={theme['color-primary-default']}
            name="arrow-right-outline"
          />
          <Text category="p1" style={styles.text}>
            {each}
          </Text>
        </View>
      ));
    }

    return (
      <Text category="p1" style={styles.text}>
        {opening[key]}
      </Text>
    );
  }

  return (
    <Layout
      level="3"
      style={{
        flex: 1,
        padding: 12,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={{width: BOARD_SIZE, height: BOARD_SIZE}}
            source={{
              uri: opening.imagePath,
            }}
          />
        </View>

        <View style={styles.itemContainer}>
          <Title>Moves</Title>
          <Divider />
          <Text category="p1" appearance="hint" style={styles.text}>
            {formatMoves(opening.moves)}
          </Text>
        </View>

        {keys.map(key => (
          <View style={styles.itemContainer}>
            <Title>{key}</Title>
            <Divider />
            {renderRow(key)}
          </View>
        ))}

        <Variants />
      </ScrollView>
    </Layout>
  );
};

export default DetailsScreen;
