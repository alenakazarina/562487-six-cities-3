import React, {PureComponent} from 'react';
import {arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';
import {SortType} from '../../const';

export const getSortedOffers = (offers, activeSortType) => {
  switch (activeSortType) {
    case SortType.PRICE_TO_LOW:
      return offers.slice().sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
    case SortType.PRICE_TO_HIGH:
      return offers.slice().sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    default:
      return offers;
  }
};

const withSort = (Component) => {
  class WithSort extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeSortType: SortType.POPULAR
      };
      this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    }

    _handleSortTypeChange(sortType) {
      this.setState({
        activeSortType: sortType
      });
    }

    render() {
      const {activeSortType} = this.state;
      const sortedOffers = getSortedOffers(this.props.offers, activeSortType);
      return (
        <Component
          {...this.props}
          offers={sortedOffers}
          activeSortType={activeSortType}
          onSortTypeChange={this._handleSortTypeChange}
        />
      );
    }
  }

  WithSort.propTypes = {
    offers: arrayOf(offerPropTypes)
  };

  return WithSort;
};

export default withSort;
