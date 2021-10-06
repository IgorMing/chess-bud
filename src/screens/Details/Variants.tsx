import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Divider, Icon, Layout, Text, useTheme} from '@ui-kitten/components';
import I18n from 'i18n/i18n';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {formatMoves} from '../../configs/helpers';
import styles from './styles';
import Title from './Title';
import {VariantsProps} from './types';

const Variants: React.VFC<VariantsProps> = ({openingUid}) => {
  const [variants, setVariants] = useState<
    FirebaseFirestoreTypes.DocumentData[]
  >([]);
  const theme = useTheme();
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

        setVariants(_variants);
      });
  }, [openingUid]);

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
        renderContent={props => (
          <View style={styles.variantContainer}>
            <Text category="p1" appearance="hint" style={styles.moves}>
              {formatMoves(['e4 e5', 'Nf3 Nc6', 'Bb5 a6', 'Ba4 Nf6', 'O-O'])}
            </Text>
            <Text style={styles.text}>{props.details}</Text>
          </View>
        )}
        onChange={setActiveActions}
      />
    </View>
  );
};

export default Variants;
