import React, {useImperativeHandle, forwardRef, useState, useRef} from 'react';
import {TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {IconX} from '../Icons';
import { fontStyle } from '../Styles/FontStyles';
import colors from '../Themes/Colors';

function Input({style, ...other}, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return (
    <TextInput
      ref={inputRef}
      placeholderTextColor={colors.secondaryTextColor}
      {...other}
      style={[style, fontStyle.regular, {color: colors.textColor}]}
    />
  );
}

Input = forwardRef(Input);

export default React.memo(Input);
