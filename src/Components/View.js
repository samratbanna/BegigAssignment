import React from "react";
import { View } from "react-native";

export default ({ children, useSafeAreaView, ...other }) => {
	const Element = View // useSafeAreaView && isIos ? SafeAreaView : View;
	return <Element {...other}>{children}</Element>;
};
