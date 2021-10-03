import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ThemeType} from '@ui-kitten/components';

export default function useHeaderOptions(
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
