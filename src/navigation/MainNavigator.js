import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import { Image } from '@rneui/themed';
import React from 'react';
import Images from '../Images';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => (
          <Image source={Images.dashboard} style={{width: 20, height: 20}} resizeMode={'center'} />
        ),
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Dashboard" component={HomeNavigator} />
      <Tab.Screen name="Chat" component={HomeNavigator} />
      <Tab.Screen name="Explore" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
