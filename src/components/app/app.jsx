import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const titleClickHandler = () => {};

const App = ({offers}) => {
  return (
    <Main
      city={offers[0].city}
      offers={offers[0].offers}
      onTitleClick={titleClickHandler}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    offers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      isPremium: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  })).isRequired
};

export default App;
