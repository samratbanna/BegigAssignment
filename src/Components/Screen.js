import React from 'react';
import { View } from 'react-native';
import viewStyles from '../Styles/ViewStyles';
import Colors from '../Themes/Colors';

export default ({style, ...other}) => {
  return (
    <View
      {...other}
      style={[viewStyles.container, style, {backgroundColor: Colors.background}]}
      useSafeAreaView
    />
  );
};

export class Container extends React.Component {
  render() {
    return <ContainerComponent {...this.props} />;
  }
}

const ContainerComponent = ({style, bg, ...other}) => {
  return (
    <View
      {...other}
      style={[
        viewStyles.container,
        {backgroundColor: bg ? Colors.background : 'transparent'},
        style,
      ]}
    />
  );
};
