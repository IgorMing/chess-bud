import {Divider, List} from '@ui-kitten/components';
import React, {useContext} from 'react';
import ListCard from 'src/components/Card';
import Container from 'src/components/Container';
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
    // <Container>
    <List
      showsHorizontalScrollIndicator={false}
      data={bookmarkedData}
      ListEmptyComponent={EmptyList}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      ItemSeparatorComponent={Divider}
    />
    // </Container>
  );
};

export default FavoritesLoggedIn;
