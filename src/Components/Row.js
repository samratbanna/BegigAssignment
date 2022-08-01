import React from "react";
import viewStyles from "../Styles/ViewStyles";
import View from "./View";

export default ({
  style,
  spread,
  justify,
  align,
  right,
  center,
  children,
  ...other
}) => {
  const rowStyles = {
    justifyContent: justify
      ? justify
      : spread
      ? "space-between"
      : center
      ? "center"
      : right
      ? "flex-end"
      : "flex-start"
  };

  return (
    <View {...other} style={[viewStyles.row, rowStyles, style]}>
      {children}
    </View>
  );
};
