import React, {useContext} from 'react';
import {AuthContext} from 'src/modules/authentication';
import FavoritesLoggedIn from './FavoritesLoggedIn';
import FavoritesNotLogged from './FavoritesNotLogged';
import {FavoritesProps} from './types';

const Favorites: React.FC<FavoritesProps> = ({navigation}) => {
  const authContext = useContext(AuthContext);

  return authContext.isLoggedIn ? (
    <FavoritesLoggedIn
      onPress={item => {
        navigation.navigate('Details', {title: item.name, uid: item.key});
      }}
    />
  ) : (
    <FavoritesNotLogged
      onPress={() => {
        navigation.navigate('ProfileStack');
      }}
    />
  );
};

export default Favorites;
