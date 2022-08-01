import {StyleSheet} from 'react-native';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeHeader: {
    padding: 20,
    paddingTop: 50,
    alignItems: 'flex-end',
  },

  rowSpread: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default viewStyles;
