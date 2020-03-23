import React from 'react';
import {connect} from 'react-redux';
import {bool, string} from 'prop-types';
import {appUserPropTypes} from '../../types';
import {getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsListItem from '../locations-list-item/locations-list-item';

const styles = {
  wrapper: {
    width: `420px`,
    marginTop: `16.7vh`,
    marginRight: `auto`,
    marginLeft: `auto`,
    paddingTop: `94px`,
    textAlign: `center`,
    backgroundImage: `url(../img/ico-saved.svg)`,
    backgroundSize: `60px 73px`,
    backgroundPosition: `center top`,
    backgroundRepeat: `no-repeat`
  },
  status: {
    display: `block`,
    marginBottom: `5px`,
    fontSize: `32px`,
    lineHeight: `1.1875`
  },
  description: {
    marginTop: `0`,
    padding: `0 30px`,
    fontSize: `16px`,
    lineHeight: `1.5`
  },
  city: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: `20px`
  }
};

const NotFound = (props) => {
  const {
    isAuth,
    user,
    activeCity
  } = props;

  return (
    <div className="page page--gray page--not-found">
      <Header
        isAuth={isAuth}
        user={user}
      />
      <main className="page__not-found">
        <div className="not-found__status-wrapper" style={styles.wrapper}>
          <b className="not-found__status" style={styles.status}>Page Not Found</b>
          <p className="not-found__status-description" style={styles.description}>It happens! Let’s get you back on track.</p>
          <div style={styles.city}>
            <LocationsListItem
              nodeType="div"
              city={activeCity}
              isActive
            />
          </div>
        </div>
      </main>
    </div>
  );
};

NotFound.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  activeCity: string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state)
});

export {NotFound};
export default connect(mapStateToProps)(NotFound);
