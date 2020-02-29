import React from 'react';
import Page from '../page/page';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {arrayOf} from 'prop-types';
import {offerPropTypes} from '../../types';

const Favorites = ({favorites}) => {
  const isEmpty = favorites.length === 0;
  const pageClassName = isEmpty ? `page--favorites-empty` : `page--favorites`;
  const mainClassName = isEmpty ? `page__main--favorites-empty` : ``;

  return (
    <Page className={pageClassName}>
      <main className={`page__main page__main--favorites ${mainClassName}`}>
        <div className="page__favorites-container container">
          {isEmpty ?
            <FavoritesEmpty /> :
            <FavoritesList favorites={favorites} />}
        </div>
      </main>
      <Footer/>
    </Page>
  );
};

Favorites.propTypes = {
  favorites: arrayOf(offerPropTypes).isRequired
};

export default Favorites;
