import React from 'react';
import {string, bool, func} from 'prop-types';

const SortItem = ({sortType, isActive, onSortTypeChange}) => (
  <li
    className={`places__option ${isActive ? `places__option--active` : ``}`}
    tabIndex="0"
    onClick={() => {
      if (isActive) {
        return;
      }
      onSortTypeChange(sortType);
    }}
  >{sortType}</li>
);

SortItem.propTypes = {
  isActive: bool.isRequired,
  sortType: string.isRequired,
  onSortTypeChange: func.isRequired
};

export default SortItem;
