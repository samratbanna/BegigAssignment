import { StyleSheet, Platform } from "react-native";
import { isAndroid } from "../Constants";


export default StyleSheet.create({
  header: {
    backgroundColor: "#313151",
    height: 60
  },
  header_statusBar: {
    ...getHeaderInfo()
  },
  headerTitle: {
    width: (metrics.screenWidth * 2) / 3,
    fontWeight: "300"
  }
});

function getHeaderInfo() {
  return isAndroid && Platform.Version > 20
    ? {
        height: 90,
        elevation: 0,
        paddingTop: 30
      }
    : {
        height: 60
      };
}
