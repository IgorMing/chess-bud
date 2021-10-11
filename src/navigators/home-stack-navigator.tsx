import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import {Icon, useTheme} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {AuthContext} from 'src/modules/authentication';
import useStackHeaderOptions from '../configs/headerOptions';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home/index';
import {HomeStackParamList} from './types';
import {UserContext} from 'src/modules/user';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const theme = useTheme();
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const headerOptions = useStackHeaderOptions(theme);

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({route}) => ({
          title: route.params.title,
          headerRight: () => {
            if (!authContext.isLoggedIn) {
              return null;
            }

            const {uid} = route.params;
            const iconName = userContext.isBookmarked(uid)
              ? 'star'
              : 'star-outline';

            return (
              <TouchableOpacity onPress={() => userContext.toggleBookmark(uid)}>
                <Icon
                  name={iconName}
                  fill={theme['color-warning-600']}
                  style={{width: 28, height: 28}}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
