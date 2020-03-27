import * as React from 'react';

interface Props {
  isActive: boolean;
  sortType: string;
  onSortTypeChange: (sortType: string) => void;
};

const SortItem: React.FC<Props> = ({isActive, sortType, onSortTypeChange}) => (
  <li
    className={`places__option ${isActive ? `places__option--active` : ``}`}
    tabIndex={0}
    onClick={() => {
      if (isActive) {
        return;
      }
      onSortTypeChange(sortType);
    }}
  >{sortType}</li>
);

export default SortItem;
