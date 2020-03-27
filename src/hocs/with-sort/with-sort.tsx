import * as React from 'react';
import {Subtract} from 'utility-types';
import {OfferTypes} from '../../types';
import {SortType} from '../../const';

export const getSortedOffers = (offers: OfferTypes[], activeSortType: string) => {
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

interface InjectingProps {
  offers: OfferTypes[];
  activeSortType: string;
  onSortTypeChange: (sortType: string) => void;
};

type State = {
  activeSortType: string
};

const withSort = (Component) => {
  type InitialProps = React.ComponentProps<typeof Component>;
  type Props = Subtract<InitialProps, InjectingProps>;

  class WithSort extends React.PureComponent<Props, State> {
    props: Props;
    state: State;

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

  return WithSort;
};

export default withSort;
