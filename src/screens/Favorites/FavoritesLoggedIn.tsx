import {Divider, Layout, List} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ListCard from 'src/components/Card';
import {OpeningsContext} from 'src/modules/openings';
import {OpeningProps} from '../Home/types';

interface FavoritesLoggedInProps {
  onPress: (item: OpeningProps) => void;
}

const FavoritesLoggedIn: React.VFC<FavoritesLoggedInProps> = ({onPress}) => {
  const openingsContext = useContext(OpeningsContext);

  function renderItem({item}: {item: OpeningProps}) {
    return (
      <ListCard
        completeDetails
        details={item.details}
        imageAccessWay={item.imageAccessWay}
        imageRef={item.imageReference}
        moves={item.moves}
        onPress={() => onPress(item)}
        title={item.name}
      />
    );
  }

  return (
    <Layout style={styles.container}>
      <List
        data={openingsContext.data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 32,
    paddingBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default FavoritesLoggedIn;
