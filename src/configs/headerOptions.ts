import {ThemeType} from '@ui-kitten/components';

export default function useHeaderOptions(theme: ThemeType) {
  return {
    headerTintColor: theme['text-basic-color'],
    headerStyle: {
      backgroundColor: theme['color-basic-1000'],
    },
  };
}
