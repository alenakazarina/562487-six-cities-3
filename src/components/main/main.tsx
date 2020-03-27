import * as React from 'react';
import {connect} from 'react-redux';
import {AppUser} from '../../types';
import {getCities, getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsList from '../locations-list/locations-list';
import Cities from '../cities/cities';

interface Props {
  isAuth: boolean;
  user: AppUser;
  activeCity: string;
  cities: string[];
}

const Main: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  cities: getCities(state),
  activeCity: getActiveCity(state)
});

export {Main};
export default connect(mapStateToProps)(Main);

