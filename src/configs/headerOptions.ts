import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ThemeType} from '@ui-kitten/components';

export default function useStackHeaderOptions(
  theme: ThemeType,
): NativeStackNavigationOptions {
  return {
    headerTintColor: theme['text-basic-color'],
    headerStyle: {
      backgroundColor: theme['color-basic-1000'],
    },
    headerBackTitleVisible: false,
  };
}

export function useTabOptions(theme: ThemeType): BottomTabNavigationOptions {
  return {
    headerTintColor: theme['text-basic-color'],
    headerStyle: {
      backgroundColor: theme['color-basic-1000'],
    },
    headerShown: false,
  };
}
