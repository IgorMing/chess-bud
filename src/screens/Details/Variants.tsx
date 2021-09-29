import {Divider, Icon, Layout, Text, useTheme} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {formatMoves} from '../../configs/helpers';
import styles from './styles';
import Title from './Title';

const VARIANTS = [
  {
    name: 'Main line',
    moves: ['e4 e5', 'Nf3 Nc6', 'Bb5 a6', 'Ba4 Nf6', 'O-O'],
    details:
      'The Main Line of the Ruy Lopez sees White positioning their pieces to prepare for a long struggle for central control. Black starts to fend off the white light-squared bishop with 3...a6. After White castles, the game can still take many different directions.',
  },
  {
    name: 'Closed variation',
    moves: ['e4 e5', 'Nf3 Nc6', 'Bb5 a6', 'Ba4 Nf6', 'O-O Be7'],
    details:
      "In the Closed Variation, Black puts their dark-squared bishop on e7, usually inside the pawn chain. After Black's fifth move, play can continue in many different ways.",
  },
];

const Variants: React.FC = () => {
  const theme = useTheme();
  const [activeActions, setActiveActions] = useState<number[]>([]);
  return (
    <View>
      <Title>Variants</Title>
      <Divider />

      <Accordion
        expandMultiple
        activeSections={activeActions}
        sections={VARIANTS}
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
