import firestore from '@react-native-firebase/firestore';
import I18n from '../../i18n/i18n';
import storage from '@react-native-firebase/storage';
import {
  Divider,
  Icon,
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  View,
} from 'react-native';
import {formatMoves, getUsableKeys, isObjKey} from '../../configs/helpers';
import {OpeningProps} from '../Home/types';
import themedStyles from './styles';
import Title from './Title';
import {DetailsProps} from './types';
import Variants from './Variants';

const BOARD_SIZE = Dimensions.get('screen').width * 0.95;

const DetailsScreen: React.VFC<DetailsProps> = ({route}) => {
  const [opening, setOpening] = useState<OpeningProps | null>(null);
  const [boardPath, setBoardPath] = useState<string | null>(null);
  const [fieldKeys, setFieldKeys] = useState<string[]>([]);
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  useEffect(() => {
    firestore()
      .collection('openings')
      .doc(route.params.uid)
      .get()
      .then(result => {
        const data = result.data() as OpeningProps;
        if (data) {
          setOpening(data);
          setFieldKeys(getUsableKeys(data));
        }
      });
  }, [route.params.uid]);

  useEffect(() => {
    const {imageAccessWay, imageReference} = opening ?? {};

    switch (imageAccessWay) {
      case 'cloud-storage':
        const reference = storage().ref(imageReference);
        reference.getDownloadURL().then(setBoardPath);
        break;
      case 'url':
        imageReference && setBoardPath(imageReference);
        break;
      case 'none':
      default:
        return;
    }
  }, [opening]);

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
            {boardPath && (
              <View style={styles.imageContainer}>
                <Image
                  style={{width: BOARD_SIZE, height: BOARD_SIZE}}
                  source={{
                    uri: boardPath,
                  }}
                />
              </View>
            )}

            <View style={styles.itemContainer}>
              <Title>{I18n.t('moves')}</Title>
              <Divider />
              <Text category="p1" appearance="hint" style={styles.text}>
                {formatMoves(opening.moves)}
              </Text>
            </View>

            {fieldKeys.map(key => (
              <View key={key} style={styles.itemContainer}>
                <Title>{key}</Title>
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
