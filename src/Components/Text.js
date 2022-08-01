import {Text} from '@rneui/themed';
import React from 'react';
import { fontStyle } from '../Styles/FontStyles';
import Colors from '../Themes/Colors';

export default ({
  style,
  secondary,
  small,
  bold,
  semiBold,
  medium,
  color,
  fontSize,
  light,
  ...other
}) => {
  const colorStyle = color
    ? color
    : secondary
    ? Colors.secondaryTextColor
    : Colors.textColor;
  const sizeStyles = light
    ? fontStyle.light
    : bold
    ? fontStyle.bold
    : semiBold
    ? fontStyle.semiBold
    : medium
    ? fontStyle.regular
    : fontStyle.regular;

  return (
    <Text
      {...other}
      style={[sizeStyles, {color: colorStyle, fontSize: fontSize ?? 16}, style]}
    />
  );
};
