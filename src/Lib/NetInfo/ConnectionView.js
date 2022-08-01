import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import useNetInfo from "../NetInfo";
import {Section, Row } from "../../Components";
import { IconX, ICON_TYPE } from "../../Icons";
import { Text } from "@rneui/themed";

export default () => {
  const { isConnected } = useNetInfo();

  useEffect(() => {
    // !isConnected && showInfoToast("Internet not connected");
  }, [isConnected]);

  return !isConnected ? (
    <Section style={styles.container}>
      <Row>
        <IconX color="white" name="wifi-off" origin={ICON_TYPE.FEATHER_ICONS} />
        <Text style={styles.text}>Internet Disconnected </Text>
      </Row>
    </Section>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7263D",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginLeft: 20,
    color: "white"
  }
});
