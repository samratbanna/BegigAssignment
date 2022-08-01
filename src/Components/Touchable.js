import React from 'react';
import {InteractionManager, TouchableOpacity} from 'react-native';
import {
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import {isAndroid} from '../Constants';

export default React.memo(
  ({onPress, foreground = true, background, ...other}) => {
    const _onPress = () => {
      InteractionManager.runAfterInteractions(() => {
        onPress && onPress();
      });
    };

    return isAndroid ? (
      <TouchableNativeFeedback
        useForeground={foreground}
        background={TouchableNativeFeedback.Ripple(
          other.color || 'primary',
          other.border ? false : true,
        )}
        onPress={_onPress}
        {...other}
      />
    ) : (
      <TouchableOpacity onPress={_onPress} {...other} />
    );
  },
);
