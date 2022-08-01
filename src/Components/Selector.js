import {file} from '@babel/types';
import {useNavigation} from '@react-navigation/core';
import {Button, Icon, ListItem} from '@rneui/themed';
import {filter, find, size} from 'lodash';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Routes from '../navigation/Routes';
import colors from '../Themes/Colors';
import Row from './Row';
import Text from './Text';
import View from './View';

export default ({
  title,
  data,
  selectedValue,
  multiple,
  onSelect,
  hideDialog,
  state,
}) => {
  const navigation = useNavigation();
  const [selectedValues, setSelectedValues] = useState(selectedValue);

  const _onSelect = () => {
    onSelect(selectedValues);
    hideDialog();
  };

  return (
    <View style={{flex: 1}}>
      <Row
        spread
        style={{
          backgroundColor: 'white',
          height: 60,
          padding: 10,
          elevation: 5,
        }}>
        <Button
          onPress={hideDialog}
          title=""
          buttonStyle={{backgroundColor: 'white'}}
          icon={<Icon name="close" size={25} color={colors.primary} />}
        />
        <Text fontSize={16} bold color={'black'}>
          {title}
        </Text>

        <Button
          onPress={_onSelect}
          title=""
          buttonStyle={{backgroundColor: 'white'}}
          icon={<Icon name="check" size={25} color={colors.primary} />}
        />
      </Row>
      <FlatList
        data={data}
        renderItem={({item}) => {
          const isSelected = multiple
            ? find(selectedValues, value => value.id === item.id)
            : state
            ? item.id === selectedValues.id
            : item.name === selectedValues;
          const _onSelectItem = () => {
            if (multiple) {
              if (isSelected) {
                setSelectedValues(
                  filter(selectedValue, value => value.id !== item.id),
                );
              } else if (size(selectedValues) > 0) {
                setSelectedValues([...selectedValues, item]);
              } else {
                setSelectedValues([item]);
              }
            } else if (state) {
              setSelectedValues(item);
            } else {
              setSelectedValues(item.name);
            }
          };
          return (
            <ListItem bottomDivider onPress={_onSelectItem}>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              {isSelected && (
                <ListItem.Chevron
                  name="check"
                  color={colors.primary}
                  size={20}
                />
              )}
            </ListItem>
          );
        }}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
};
