import React from 'react';
import {connect} from 'react-redux';
import {bool} from 'prop-types';
import {appUserPropTypes} from '../../types';
import {getFavorites} from '../../reducers/favorites/selectors';
import Header from '../../components/header/header';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const Favorites = (props) => {
  const {isAuth, user, isEmpty} = props;

  return (
    <div className={`page page--favorites ${isEmpty ? `page--favorites-empty` : ``}`}>
      <Header
        isAuth={isAuth}
        user={user}
      />
      <main className={`page__main page__main--favorites ${isEmpty ? `page__main--favorites-empty` : ``}`}>
        <div className="page__favorites-container container">
          {isEmpty ?
            <FavoritesEmpty /> :
            <FavoritesList />
          }
        </div>
      </main>
      <Footer/>
    </div>
  );
};

Favorites.propTypes = {
  isAuth: bool.isRequired,
  user: appUserPropTypes,
  isEmpty: bool.isRequired
};

const mapStateToProps = (state) => ({
  isEmpty: getFavorites(state).length === 0
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
