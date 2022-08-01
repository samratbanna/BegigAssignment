import React from "react";
import { View } from "react-native";

export default ({ size }) => {
  return <View style={{ height: size || 10 }} />;
};
