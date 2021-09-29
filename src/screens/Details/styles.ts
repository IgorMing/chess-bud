import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    paddingBottom: 12,
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 12,
  },
  icon: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 2,
    paddingHorizontal: 12,
  },
  variantContainer: {
    paddingVertical: 8,
  },
  moves: {
    paddingBottom: 12,
  },
});
