import {Dimensions, Platform} from 'react-native';
import {StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const screenDimensions = Dimensions.get('screen');

const metrics = {
  s5: 5,
  s8: 8,
  s10: 10,
  s16: 16,
  s20: 20,
  s30: 30,
  s40: 40,
  s50: 50,
  s60: 60,

  f8: 8,
  f10: 10,
  f12: 12,
  font: 14,
  f16: 16,
  f18: 18,
  head: 20,
  f24: 24,
  f32: 32,
  f48: 48,

  borderWidth: 0.4,

  horizontalLineHeight: 1,
  statusBarHeight: StatusBar.currentHeight || 35,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  drawerWidth: (4 / 5) * width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  buttonRadius: 4,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
