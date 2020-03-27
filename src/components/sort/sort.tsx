import * as React from 'react';
import {SortType} from '../../const';
import SortItem from '../sort-item/sort-item';

interface Props {
  isActive: boolean;
  activeSortType: string;
  onToggleClick: () => void;
  onSortTypeChange: (sortType: string) => void;
};

const Sort: React.FC<Props> = ({
    isActive,
    onToggleClick,
    activeSortType,
    onSortTypeChange
  }) => {

  const openedClass = isActive ? `places__options--opened` : ``;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onToggleClick}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${openedClass}`}
        onClick={onToggleClick}
      >
        {Object.values(SortType).map((sortType: string, i: number) => {
          const key = Object.keys(SortType)[i].toLowerCase();
          return (
            <SortItem
              key={key}
              isActive={sortType === activeSortType}
              sortType={sortType}
              onSortTypeChange={onSortTypeChange}
            />
          );
        })}
      </ul>
    </form>
  );
};

export default React.memo(Sort);
