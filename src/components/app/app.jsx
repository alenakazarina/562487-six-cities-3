import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const titleClickHandler = () => {};

const App = ({locations, offers}) => {
  return (
    <Main locations={locations} offers={offers} onTitleClick={titleClickHandler} />
  );
};

App.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default App;
