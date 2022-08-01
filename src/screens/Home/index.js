import React from 'react';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {useNavigation} from '@react-navigation/core';
import {AbsoluteContainer, Row} from '../../Components';
import Images from '../../Images';
import {Image} from '@rneui/themed';
import Text from '../../Components/Text';
import metrics from '../../Themes/Metrics';
import colors from '../../Themes/Colors';
import View from '../../Components/View';
import {FlatList, TouchableOpacity} from 'react-native';
import {DASHBOARD_BACKENDLIST, FRONT_END_LIST} from '../../Constants';
import {IconX, ICON_TYPE} from '../../Icons';

export default () => {
  const navigation = useNavigation();
  return (
    <LoadingActionContainer>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <SearchBar />
      </TouchableOpacity>
      <View style={{paddingLeft: 20}}>
        <Text semiBold style={{marginVertical: 10}}>
          Front End Developer
        </Text>
        <Row>
          <FlatList
            horizontal
            data={FRONT_END_LIST}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item, index) => item.id + index}
          />
        </Row>
        <Text semiBold style={{marginVertical: 10}}>
          Back End Developer
        </Text>
        <Row>
          <FlatList
            horizontal
            data={DASHBOARD_BACKENDLIST}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item, index) => item.id + index}
          />
        </Row>
        <Text semiBold style={{marginVertical: 10}}>
          Front End Developer
        </Text>
        <Row>
          <FlatList
            horizontal
            data={FRONT_END_LIST}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item, index) => item.id + index}
          />
        </Row>
        <Text semiBold style={{marginVertical: 10}}>
          Back End Developer
        </Text>
        <Row>
          <FlatList
            horizontal
            data={DASHBOARD_BACKENDLIST}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item, index) => item.id + index}
          />
        </Row>
      </View>
    </LoadingActionContainer>
  );
};
const RenderItem = ({item}) => {
  console.log('item', item);
  return (
    <View
      style={{
        width: metrics.screenWidth / 2.3,
        aspectRatio: 1.26,
        backgroundColor: item.color,
        borderRadius: 20,
        marginRight: 10,
        padding: 16,
      }}>
      <View
        style={{
          width: 40,
          aspectRatio: 1,
          borderRadius: 20,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          style={{
            height: 30,
            width: 30,
          }}
          resizeMode={'center'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text semiBold color={'white'} style={{marginTop: 10}}>
          {item.title}
        </Text>
        <Text color={'white'} style={{marginTop: 0, fontSize: 12}}>
          {item.description}
        </Text>
      </View>
      <AbsoluteContainer style={{top: 0, right: 0}}>
        <Image
          source={Images.shadow1}
          style={{
            width: metrics.screenWidth / 2,
            alignSelf: 'flex-end',
            height: metrics.screenWidth / 6,
          }}
        />
      </AbsoluteContainer>
      <AbsoluteContainer style={{bottom: 0, right: 0}}>
        <Image
          source={Images.shadow2}
          style={{
            width: metrics.screenWidth / 2,
            alignSelf: 'flex-end',
            height: metrics.screenWidth / 6,
          }}
        />
      </AbsoluteContainer>
    </View>
  );
};

export const Header = ({back}) => {
  return (
    <Row spread style={{padding: 20}}>
      {back ? (
        <IconX
          name={'arrow-back-ios'}
          origin={ICON_TYPE.MATERIAL_ICONS}
          size={30}
        />
      ) : (
        <Image source={Images.user} style={{width: 25, height: 25}} />
      )}
      <Row>
        <Image source={Images.bell} style={{width: 25, height: 25}} />
        <Image
          source={Images.save}
          style={{width: 25, height: 25}}
          resizeMode={'center'}
        />
      </Row>
    </Row>
  );
};

const SearchBar = () => {
  return (
    <Row spread style={{padding: 20}}>
      <Row
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          borderColor: colors.borderColor,
          width: '80%',
        }}>
        <Image
          source={Images.search}
          style={{width: 25, height: 25, marginRight: 10}}
        />
        <Text>Search Talent, Role and more</Text>
      </Row>
      <Row
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          borderColor: colors.borderColor,
          width: 50,
          aspectRatio: 1,
          marginLeft: 10,
        }}>
        <Image
          source={Images.filter}
          style={{width: 25, height: 25}}
          resizeMode={'center'}
        />
      </Row>
      <Row></Row>
    </Row>
  );
};
