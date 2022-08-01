import React from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={[
        'rgba(255,255,255,0.2)',
        '#fafafa',
        '#fafafa',
        'rgba(255,255,255,0.2)',
      ]}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../Images/logo.png")} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    aspectRatio: 1.5,
    flexDirection: 'row',
    resizeMode: 'contain',
  },

  container: {
    padding: 40,
    paddingBottom: 0,
    marginTop: 30,
    flexDirection: 'row',
    // aspectRatio: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
