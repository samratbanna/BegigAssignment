import React from 'react';

export default (state: any, action: any) => {
  return Object.assign({}, state, {
    [action.type]: action.value,
  });
};
