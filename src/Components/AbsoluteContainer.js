import React from "react";
import { View } from "react-native";

export default ({ children, bottom, top, style, ...other }) => {
  let styles = {
    position: "absolute",
    ...style
  };

  styles = bottom
    ? Object.assign(styles, {
        bottom: 0,
        left: 0,
        right: 0
      })
    : top
    ? Object.assign(styles, {
        top: 0,
        left: 0,
        right: 0
      })
    : Object.assign(styles, {});

  return (
    <View {...other} style={[styles]}>
      {children}
    </View>
  );
};
