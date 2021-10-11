import {Divider, Layout, List} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ListCard from 'src/components/Card';
import {OpeningsContext} from 'src/modules/openings';
import {UserContext} from 'src/modules/user';
import {OpeningProps} from '../Home/types';
import EmptyList from './EmptyList';

interface FavoritesLoggedInProps {
  onPress: (item: OpeningProps) => void;
}

const FavoritesLoggedIn: React.VFC<FavoritesLoggedInProps> = ({onPress}) => {
  const userContext = useContext(UserContext);
  const openingsContext = useContext(OpeningsContext);
  const bookmarkedData = openingsContext.getBookmarkedData(
    userContext.bookmarked,
  );

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
        data={bookmarkedData}
        ListEmptyComponent={EmptyList}
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
