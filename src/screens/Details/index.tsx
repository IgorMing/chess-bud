import firestore from '@react-native-firebase/firestore';
import {
  Divider,
  Icon,
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import I18n from 'i18n/i18n';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import {
  BOARD_SIZE,
  formatMoves,
  isObjKey,
  USABLE_KEYS,
  useImagePath,
} from '../../configs/helpers';
import {OpeningProps} from '../Home/types';
import themedStyles from './styles';
import Title from './Title';
import {DetailsProps} from './types';
import Variants from './Variants';

const DetailsScreen: React.VFC<DetailsProps> = ({route}) => {
  const [opening, setOpening] = useState<OpeningProps | null>(null);
  const [fieldKeys, setFieldKeys] = useState<string[]>([]);
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const imagePath = useImagePath(
    opening?.imageReference,
    opening?.imageAccessWay,
  );

  useEffect(() => {
    firestore()
      .collection('openings')
      .doc(route.params.uid)
      .get()
      .then(result => {
        const data = result.data() as OpeningProps;
        if (data) {
          setOpening(data);
          setFieldKeys(USABLE_KEYS);
        }
      });
  }, [route.params.uid]);

  function renderRow(key: string, _opening: OpeningProps) {
    if (!isObjKey(key, _opening)) {
      return null;
    }

    const value = _opening[key];

    if (Array.isArray(value)) {
      return value.map(each => (
        <View key={each} style={styles.groupContainer}>
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
        {value}
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
        {!opening ? (
          <ActivityIndicator />
        ) : (
          <>
            {imagePath && (
              <View style={styles.imageContainer}>
                <Image
                  style={{width: BOARD_SIZE, height: BOARD_SIZE}}
                  source={{
                    uri: imagePath,
                  }}
                />
              </View>
            )}

            <View style={styles.itemContainer}>
              <Title>{I18n.t('details.moves')}</Title>
              <Divider />
              <Text category="p1" appearance="hint" style={styles.text}>
                {formatMoves(opening.moves)}
              </Text>
            </View>

            {fieldKeys.map(key => (
              <View key={key} style={styles.itemContainer}>
                <Title>{I18n.t(`details.${key}`)}</Title>
                <Divider />
                {renderRow(key, opening)}
              </View>
            ))}

            <Variants openingUid={route.params.uid} />
          </>
        )}
      </ScrollView>
    </Layout>
  );
};

export default DetailsScreen;
