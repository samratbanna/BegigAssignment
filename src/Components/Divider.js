import { Divider } from '@rneui/themed';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Spacing, TextX, AbsoluteContainer} from '../Components';

const DividerX = () => {
  return (
    <>
      <Spacing />
      <Divider />
      <Spacing />
    </>
  );
};

export default DividerX;

export const DividerContent = ({text}) => {
  return (
    <View style={styles.container}>
      <DividerX />
      <AbsoluteContainer style={styles.absolute}>
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          <TextX small style={styles.text}>
            {text}
          </TextX>
        </View>
      </AbsoluteContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', paddingVertical: 16},
  text: {textAlign: 'center'},
  absolute: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
