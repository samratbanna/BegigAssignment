import {Button, Dialog, Icon, Input, ListItem} from '@rneui/themed';
import {filter, size} from 'lodash';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import { STATUS } from '../Constants';
import FollowupStore from '../Store/followup';
import colors from '../Themes/Colors';
import {showErrorToast, showSuccessToast} from '../Utils/Toast';
import useCheckStatus from '../Utils/useCheckStatus';
import Row from './Row';
import Text from './Text';
import View from './View';

export default ({title, selected, onSelect, hideDialog, school}) => {
  const [selectedValue, setSelectedValue] = useState(selected);
  const [filteredList, setFilteredList] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const addCategory = FollowupStore(state => state.addCategory);
  const addCategoryStatus = FollowupStore(state => state.addCategoryStatus);
  const followupCategory = FollowupStore(state => state.followupCategory);
  const getFollowupCategory = FollowupStore(state => state.getFollowupCategory);
  const categoryStatus = FollowupStore(state => state.categoryStatus);
  const loading = addCategoryStatus === STATUS.FETCHING || categoryStatus === STATUS.FETCHING;
  console.log('selectedValues', selectedValue);
  const _onSelect = () => {
    onSelect(selectedValue);
    hideDialog();
  };

  useCheckStatus({
    status: addCategoryStatus,
    onSuccess: () => {
      getFollowupCategory();
      showSuccessToast('New category added successfully');
    },
    onError: () => {
      showErrorToast('failed');
    },
  });

  const _onAddCategory = () => {
    addCategory({
      kind: 'followup',
      schoolId: school.id,
      title: searchKey,
      type: 'school',
    });
  };

  useEffect(() => {
    if (searchKey) {
      const list = filter(followupCategory, value => {
        return value.title.toLowerCase().includes(searchKey.toLowerCase());
      });
      setFilteredList(list);
    } else {
      setFilteredList(followupCategory);
    }
  }, [searchKey, followupCategory]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
      <Row style={{marginHorizontal: 10}} center>
        <View style={{flex: 1}}>
          <Input
            title={searchKey}
            onChangeText={setSearchKey}
            placeholder={'Search category'}
          />
        </View>
        <Button title={'Search'} />
      </Row>
      {size(filteredList) > 0 ? (
        <FlatList
          data={filteredList}
          renderItem={({item}) => {
            const isSelected = item._id === selectedValue?._id;
            const _onSelectItem = () => setSelectedValue(item);
            return (
              <ListItem bottomDivider onPress={_onSelectItem}>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
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
          keyExtractor={(item, index) => item._id + index}
        />
      ) : searchKey ? (
        <ListItem bottomDivider onPress={_onAddCategory}>
          <ListItem.Content>
            <ListItem.Title>
              Create Option "<Text bold>{searchKey}</Text>"
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ) : null}
      <Dialog isVisible={loading}>
        <Dialog.Loading />
      </Dialog>
    </View>
  );
};
