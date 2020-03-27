import * as React from 'react';
import {connect} from 'react-redux';
import {AppUser} from '../../types';
import {getActiveCity} from '../../reducers/offers/selectors';
import Header from '../../components/header/header';
import LocationsListItem from '../locations-list-item/locations-list-item';

const WrapperStyles: React.CSSProperties = {
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
};

const StatusStyles: React.CSSProperties = {
  display: `block`,
  marginBottom: `5px`,
  fontSize: `32px`,
  lineHeight: `1.1875`
};

const DescriptionStyles: React.CSSProperties = {
  marginTop: `0`,
  padding: `0 30px`,
  fontSize: `16px`,
  lineHeight: `1.5`
};

const CityStyles: React.CSSProperties = {
  display: `flex`,
  justifyContent: `center`,
  marginTop: `20px`
};

interface Props {
  isAuth: boolean;
  user: AppUser;
  activeCity: string;
};

const NotFound: React.FC<Props> = ({
    isAuth,
    user,
    activeCity
  }) => (
    <div className="page page--gray page--not-found">
      <Header
        isAuth={isAuth}
        user={user}
      />
      <main className="page__not-found">
        <div className="not-found__status-wrapper" style={WrapperStyles}>
          <b className="not-found__status" style={StatusStyles}>Page Not Found</b>
          <p className="not-found__status-description"
            style={DescriptionStyles}
          >It happens! Let’s get you back on track.</p>
          <div style={CityStyles}>
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

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state)
});

export {NotFound};
export default connect(mapStateToProps)(NotFound);
