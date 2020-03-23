import React from 'react';
import {connect} from 'react-redux';
import {bool, string, arrayOf} from 'prop-types';
import {appUserPropTypes} from '../../types';
import {getCities, getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';

const Main = (props) => {
  const {
    isAuth,
    user,
    activeCity,
    cities
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header
        isAuth={isAuth}
        user={user}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList
          activeCity={activeCity}
          cities={cities}
        />
        <Cities
          activeCity={activeCity}
        />
      </main>
    </div>
  );
};

Main.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  activeCity: string.isRequired,
  cities: arrayOf(string).isRequired
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getActiveCity(state)
});

export {Main};
export default connect(mapStateToProps)(Main);

