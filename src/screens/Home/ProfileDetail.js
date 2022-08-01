import React from 'react';
import LoadingActionContainer from '../../Components/LoadingActionContainer';
import {useNavigation} from '@react-navigation/core';
import {Header} from '.';
import {Row} from '../../Components';
import {CheckBox, Image} from '@rneui/themed';
import Images from '../../Images';
import colors from '../../Themes/Colors';
import Input from '../../Components/Input';
import {map} from 'lodash';
import {
  EDUCATION,
  EXPERIENCE_LEVEL,
  LANGUAGES,
  POPULAR_SEARCHES,
  RECENT_SEARCHES,
  WORK_EXPERIENCE,
} from '../../Constants';
import Text from '../../Components/Text';
import View from '../../Components/View';
import {ScrollView, TouchableOpacity} from 'react-native';
import metrics from '../../Themes/Metrics';
import {IconX, ICON_TYPE} from '../../Icons';

export default () => {
  const navigation = useNavigation();

  return (
    <LoadingActionContainer style={{paddingBottom: 10}}>
      <Header back />
      <View style={{paddingHorizontal: 20}}>
        <Row spread>
          <View>
            <Text bold>Nitin Malik</Text>
            <Text secondary>Full Stack Developer</Text>
          </View>
          <Row
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              borderColor: colors.borderColor,
              width: 45,
              aspectRatio: 1,
              marginLeft: 10,
            }}>
            <IconX
              name={'dots-three-horizontal'}
              origin={ICON_TYPE.ENTYPO}
              size={23}
            />
          </Row>
        </Row>
        <Row style={{marginTop: 20}}>
          <Image
            source={Images.nitin}
            style={{height: 180, width: 150, borderRadius: 10}}
            resizeMode="cover"
          />
          <View style={{marginLeft: 20}}>
            <Item image={Images.favorite} title={'Rating'} value={'4.8'} />
            <Item
              image={Images.doller}
              title={'Wage Rate'}
              value={'Rs. 1,500/Hr.'}
            />
            <Item
              image={Images.beg}
              title={'Experience'}
              value={'Senior (3-5 Yrs.)'}
            />
          </View>
        </Row>

        <Text bold>Skills</Text>
        <Row flexWrap={'wrap'}>
          {map(LANGUAGES, (language, index) => (
            <Row
              key={index}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 10,
                borderRadius: 8,
                marginRight: 5,
                marginTop: 10,
                backgroundColor: colors.orangeLight,
              }}>
              <Text medium color={colors.orange}>
                {language}
              </Text>
            </Row>
          ))}
        </Row>
        <Text bold>Bio</Text>
        <Text secondary>
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod. You can
          Find Only Post and Quotes Related to iOS like ipad app design, iphone
          app design. Lorem ipsum dolor sit amet, consectetur elit, sed do
          eiusmod. You can Find Only Post and Quotes Related to IOS like ipad
          app design, iphone app design
        </Text>
        <Text bold style={{marginTop: 10}}>
          Resume
        </Text>
        <Row
          spread
          style={{
            backgroundColor: colors.resumeBack,
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}>
          <Row>
            <Image
              source={Images.pdf}
              style={{height: 50, width: 50}}
              resizeMode={'center'}
            />
            <View style={{marginLeft: 20}}>
              <Text secondary semiBold>
                Resume
              </Text>
              <Text>10 MB</Text>
            </View>
          </Row>
          <Text color={colors.primary} semiBold>
            Download
          </Text>
        </Row>
        <Text bold style={{marginTop: 10}}>
          Client Review
        </Text>
        <View
          style={{
            padding: 20,
            marginTop: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            width: metrics.screenWidth * 0.7,
          }}>
          <Row>
            <View
              style={{
                padding: 20,
                backgroundColor: colors.secondaryTextColor,
                borderRadius: 10,
                width: 80,
                aspectRatio: 1,
                borderRadius: 999,
              }}
            />
            <View style={{marginLeft: 20}}>
              <Text bold>Swiggy</Text>
              <Text color={colors.primary}>Full Stack Developer</Text>
              <Row>
                <Image
                  source={Images.favorite}
                  style={{width: 20, height: 20}}
                />
                <Text secondary style={{marginLeft: 5}}>
                  4.5
                </Text>
              </Row>
            </View>
          </Row>
          <Text secondary>
            Lorem ipsum dolor sit amet, consecte elit, sed do eiusmod. You can
            Find Post and Quotes Related to IOS like app design, iphone app
            design. Lorem ipsum dolor sit amet, consecte.
          </Text>
        </View>
        <Text bold style={{marginTop: 10}}>
          Work Experience
        </Text>
        <ScrollView horizontal>
          <Row>
            {map(WORK_EXPERIENCE, experience => (
              <View
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  width: metrics.screenWidth * 0.7,
                  marginRight: 20,
                }}>
                <Row>
                  <View
                    style={{
                      padding: 20,
                      backgroundColor: colors.secondaryTextColor,
                      borderRadius: 10,
                      width: 50,
                      aspectRatio: 1,
                      borderRadius: 999,
                    }}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text bold>{experience.title}</Text>
                    <Text secondary>{experience.company}</Text>
                    <Row>
                      <Image
                        source={Images.stopwatch}
                        style={{width: 20, height: 20}}
                        resizeMode={'center'}
                      />
                      <Text secondary style={{marginLeft: 5}}>
                        {experience.period}
                      </Text>
                    </Row>
                  </View>
                </Row>
              </View>
            ))}
          </Row>
        </ScrollView>

        <Text bold style={{marginTop: 10}}>
          Education
        </Text>
        <ScrollView horizontal>
          <Row>
            {map(EDUCATION, experience => (
              <View
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  width: metrics.screenWidth * 0.7,
                  marginRight: 20,
                }}>
                <Row>
                  <View
                    style={{
                      padding: 20,
                      backgroundColor: colors.secondaryTextColor,
                      borderRadius: 10,
                      width: 50,
                      aspectRatio: 1,
                      borderRadius: 999,
                    }}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text bold>{experience.college}</Text>
                    <Text secondary>{experience.degree}</Text>
                    <Row>
                      <Image
                        source={Images.stopwatch}
                        style={{width: 20, height: 20}}
                        resizeMode={'center'}
                      />
                      <Text secondary style={{marginLeft: 5}}>
                        {experience.period}
                      </Text>
                    </Row>
                  </View>
                </Row>
              </View>
            ))}
          </Row>
        </ScrollView>
      </View>
    </LoadingActionContainer>
  );
};

const Item = ({image, title, value}) => {
  return (
    <Row style={{alignItems: 'center'}}>
      <View
        style={{
          height: 50,
          aspectRatio: 1,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <Image source={image} style={{height: 35, width: 35}} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text secondary>{title}</Text>
        <Text semiBold>{value}</Text>
      </View>
    </Row>
  );
};

const ProfileDetail = ({item}) => {
  return (
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
          <Text secondary style={{marginLeft: 5}}>
            {item.rate}
          </Text>
        </Row>
        <Row>
          <Image source={Images.beg} style={{width: 30, height: 30}} />
          <Text secondary style={{marginLeft: 5}}>
            {item.experience}
          </Text>
        </Row>
        <Row>
          <Image source={Images.favorite} style={{width: 30, height: 30}} />
          <Text secondary style={{marginLeft: 5}}>
            {item.rating}
          </Text>
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
              backgroundColor: colors.orangeLight,
            }}>
            <Text medium color={colors.orange}>
              {language}
            </Text>
          </Row>
        ))}
      </Row>
    </View>
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
