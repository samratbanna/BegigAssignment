import React, {useCallback, useMemo, useRef, useState} from 'react';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {useNavigation} from '@react-navigation/core';
import {Header} from '.';
import {Row} from '../../Components';
import {Button, CheckBox, Divider, Image, Slider} from '@rneui/themed';
import Images from '../../Images';
import colors from '../../Themes/Colors';
import Input from '../../Components/Input';
import {map} from 'lodash';
import {
  EXPERIENCE_LEVEL,
  POPULAR_SEARCHES,
  RECENT_SEARCHES,
  ROLE_TYPE,
  SEARCH_CONDIDATES,
  TECHNOLOGY,
} from '../../Constants';
import Text from '../../Components/Text';
import View from '../../Components/View';
import BottomSheet from '@gorhom/bottom-sheet';
import {FlatList, Touchable, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import metrics from '../../Themes/Metrics';
import {fontStyle} from '../../Styles/FontStyles';

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  return (
    <LoadingActionContainer fixed>
      <Header />
      <SearchView
        onOpen={() => setVisible(true)}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      {searchKey ? (
        <FlatList
          data={SEARCH_CONDIDATES}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({item}) => <CondidateItem item={item} />}
          contentContainerStyle={{paddingHorizontal: 20}}
        />
      ) : (
        <View style={{padding: 20}}>
          <RecentSearches />
          <PopularSearches />
        </View>
      )}
      <Modal
        testID={'modal'}
        isVisible={visible}
        onSwipeComplete={() => setVisible(false)}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View
          style={{
            height: metrics.screenHeight * 0.9,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingVertical: 30,
            paddingHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <ItemListWithTitle title={'Role Types'} list={ROLE_TYPE} />
          <Divider style={{marginTop: 25}} />
          <ItemListWithTitle title={'Technology'} list={TECHNOLOGY} />
          <Divider style={{marginTop: 25}} />
          <Experience />
          <Divider style={{marginTop: 25}} />
          <Text semiBold style={{marginVertical: 20}}>
            Wage Range
          </Text>
          <Slider
            maximumValue={50000}
            minimumValue={1000}
            step={1000}
            allowTouchTrack
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: colors.primary,
            }}
          />
          <Row spread>
            <Button
              title={'Search'}
              style={{flex: 1}}
              buttonStyle={{backgroundColor: colors.primary}}
              containerStyle={{flex: 1, borderRadius: 5}}
              titleStyle={fontStyle.semiBold}
            />
            <Button
              title={'Clear'}
              onPress={() => setVisible(false)}
              containerStyle={{
                flex: 1,
                marginLeft: 10,
                borderWidth: 1,
                borderRadius: 5,
              }}
              buttonStyle={{backgroundColor: 'white'}}
              titleStyle={{color: colors.textColor, ...fontStyle.regular}}
            />
          </Row>
        </View>
      </Modal>
    </LoadingActionContainer>
  );
};

const CondidateItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProfileDetail')}>
    <View
      style={{
        backgroundColor: 'white',
        marginBottom: 16,
        padding: 20,
        borderRadius: 5,
      }}>
      <Row>
        <Image
          source={Images.nitin}
          style={{height: 100, width: 100, borderRadius: 10}}
          resizeMode="stretch"
        />
        <View style={{marginLeft: 10, alignItems: 'flex-start', flex: 1}}>
          <Text bold>{item.name}</Text>
          <Text secondary>{item.position}</Text>
          <View
            style={{
              backgroundColor: colors.green,
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Text semiBold color={'white'}>
              {item.match} Match
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 10, justifyContent: 'flex-start'}}>
          <Image
            source={Images.save}
            style={{width: 25, height: 25}}
            resizeMode={'center'}
          />
        </View>
      </Row>
      <Row spread style={{marginTop: 20}}>
        <Row>
          <Image source={Images.doller} style={{width: 30, height: 30}} />
          <Text secondary style={{marginLeft: 5}}>{item.rate}</Text>
        </Row>
        <Row>
          <Image source={Images.beg} style={{width: 30, height: 30}} />
          <Text secondary style={{marginLeft: 5}}>{item.experience}</Text>
        </Row>
        <Row>
          <Image source={Images.favorite} style={{width: 30, height: 30}} />
          <Text secondary style={{marginLeft: 5}}>{item.rating}</Text>
        </Row>
      </Row>
      <Row flexWrap={'wrap'}>
        {map(item.languages, (language, index) => (
          <Row
            key={index}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderRadius: 8,
              marginRight: 5,
              marginTop: 10,
              backgroundColor: colors.orangeLight
            }}>
            <Text medium color={colors.orange}>{language}</Text>
          </Row>
        ))}
      </Row>
    </View>
    </TouchableOpacity>
  );
};

const PopularSearches = () => {
  return (
    <View>
      <Text semiBold style={{marginVertical: 20}}>
        Popular Searches
      </Text>
      <Row flexWrap={'wrap'}>
        {map(POPULAR_SEARCHES, search => (
          <Row
            key={search.id}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              borderWidth: 1,
              marginRight: 5,
              borderColor: colors.borderColor,
              marginTop: 10,
            }}>
            <Image
              source={Images.progress}
              style={{width: 20, height: 20, marginRight: 8}}
              resizeMode={'center'}
            />
            <Text secondary>{search.title}</Text>
          </Row>
        ))}
      </Row>
    </View>
  );
};

const ItemListWithTitle = ({title, list}) => {
  return (
    <View>
      <Text semiBold style={{marginVertical: 20}}>
        {title}
      </Text>
      <Row flexWrap={'wrap'}>
        {map(list, item => (
          <Row
            key={item.id}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 8,
              borderWidth: 1,
              marginRight: 5,
              borderColor: colors.borderColor,
              marginTop: 10,
            }}>
            <Text secondary>{item.title}</Text>
          </Row>
        ))}
      </Row>
    </View>
  );
};

const Experience = ({title, list}) => {
  return (
    <View>
      <Text semiBold style={{marginVertical: 20}}>
        Experience Level
      </Text>
      <Row flexWrap={'wrap'}>
        {map(EXPERIENCE_LEVEL, item => (
          <Row
            key={item.id}
            style={{
              marginRight: 5,
            }}>
            <CheckBox title={item.title} />
          </Row>
        ))}
      </Row>
    </View>
  );
};

const RecentSearches = () => {
  return (
    <View>
      <Text semiBold style={{marginVertical: 10}}>
        Recent Searches
      </Text>
      <Row flexWrap={'wrap'}>
        {map(RECENT_SEARCHES, search => (
          <Row
            key={search.id}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
              borderWidth: 1,
              marginRight: 5,
              borderColor: colors.borderColor,
              marginTop: 10,
            }}>
            <Image
              source={Images.clock}
              style={{width: 20, height: 20, marginRight: 8}}
              resizeMode={'center'}
            />
            <Text secondary>{search.title}</Text>
          </Row>
        ))}
      </Row>
    </View>
  );
};

const SearchView = ({onOpen, searchKey, setSearchKey}) => {
  return (
    <Row spread style={{padding: 20}}>
      <Row
        style={{
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          flex: 1,
          borderColor: colors.borderColor,
          width: '80%',
        }}>
        <Image
          source={Images.search}
          style={{width: 25, height: 25, marginRight: 10}}
        />
        <Input
          value={searchKey}
          onChange={setSearchKey}
          style={{flex: 1}}
          placeholder="Search Talent, Role and more"
        />
      </Row>
      <TouchableOpacity onPress={onOpen}>
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
      </TouchableOpacity>
    </Row>
  );
};
