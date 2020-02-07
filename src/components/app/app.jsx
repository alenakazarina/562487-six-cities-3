import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({locations, offers}) => {
  return (
    <Main locations={locations} offers={offers} />
  );
};

App.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default App;
