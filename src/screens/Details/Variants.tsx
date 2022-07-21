import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Divider, Icon, Layout, Text, useTheme } from '@ui-kitten/components';
import I18n from 'i18n/i18n';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { BOARD_SIZE, formatMoves } from '../../configs/helpers';
import styles from './styles';
import Title from './Title';
import { ImageUrlType, VariantsData, VariantsProps } from './types';

const Variants: React.VFC<VariantsProps> = ({ initialIndex, openingUid }) => {
  const theme = useTheme();
  const [variants, setVariants] = useState<VariantsData[]>([]);
  const [imageUrls, setImageUrls] = useState<ImageUrlType[]>([]);
  const [activeActions, setActiveActions] = useState<number[]>([]);

  useEffect(() => {
    firestore()
      .collection('openings')
      .doc(openingUid)
      .collection('variants')
      .get()
      .then(result => {
        const _variants: FirebaseFirestoreTypes.DocumentData[] = [];
        result.forEach(document => {
          _variants.push({
            ...document.data(),
            key: document.id,
          });
        });

        setVariants(_variants as VariantsData[]);
      });
  }, [openingUid]);

  useEffect(() => {
    const _urls: ImageUrlType[] = [];
    variants.forEach(variant => {
      storage()
        .ref(variant.fileName)
        .getDownloadURL()
        .then(url => {
          console.log({ url });
          _urls.push({ name: variant.name, url });
        })
        .catch(console.log);
    });
    setImageUrls(_urls);
  }, [variants]);

  if (!variants.length) {
    return null;
  }

  return (
    <View>
      <Title>{I18n.t('details.variants')}</Title>
      <Divider />
      <Accordion
        expandMultiple
        activeSections={activeActions}
        sections={variants}
        renderHeader={(props, index) => (
          <Layout level="1" style={styles.titleContainer}>
            <Title>{props.name}</Title>
            <Icon
              name={`arrow-ios-${
                activeActions.includes(index) ? 'upward' : 'downward'
              }-outline`}
              fill={theme['color-primary-default']}
              style={styles.icon}
            />
          </Layout>
        )}
        keyExtractor={item => item.name}
        renderContent={props => {
          const indexFound = imageUrls.findIndex(
            each => each.name === props.name,
          );
          return (
            <View style={styles.variantContainer}>
              <Text category="p1" appearance="hint" style={styles.moves}>
                {formatMoves(props.moves, initialIndex)}
              </Text>
              {indexFound > -1 && (
                <View style={styles.variantImageContainer}>
                  <Image
                    style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
                    source={{
                      uri: imageUrls[indexFound].url,
                    }}
                  />
                </View>
              )}
              <Text style={styles.text}>{props.details}</Text>
            </View>
          );
        }}
        onChange={setActiveActions}
      />
    </View>
  );
};

export default Variants;
