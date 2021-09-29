import {
  Divider,
  Icon,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';
import mockData from '../../configs/chess-openings-app-export.json';
import {formatMoves, getUsableKeys, isObjKey} from '../../configs/helpers';

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
          <Text category="s1" style={styles.title}>
            Moves
          </Text>
          <Divider />
          <Text category="p1" style={styles.text}>
            {formatMoves(opening.moves)}
          </Text>
        </View>

        {keys.map(key => (
          <View style={styles.itemContainer}>
            <Text category="s1" style={styles.title}>
              {key}
            </Text>
            <Divider />
            {renderRow(key)}
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  groupContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    paddingBottom: 12,
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 12,
  },
  icon: {
    height: 24,
    width: 24,
  },
  title: {
    fontSize: 18,
    paddingBottom: 6,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default DetailsScreen;
