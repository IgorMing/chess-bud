import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import React from 'react';

const BottomNavigator: React.FC<BottomTabBarProps> = ({navigation, state}) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      style={{paddingVertical: 12}}>
      <BottomNavigationTab
        title="Openings"
        icon={props => <Icon {...props} name="book-open-outline" />}
      />
      <BottomNavigationTab
        title="Favorites"
        icon={props => <Icon {...props} name="star-outline" />}
      />
      <BottomNavigationTab
        title="Profile"
        icon={props => <Icon {...props} name="person-outline" />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigator;
