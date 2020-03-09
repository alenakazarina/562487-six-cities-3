import React from 'react';
import {bool, func} from 'prop-types';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const Favorites = (props) => {
  const {isEmpty, renderHeader} = props;
  const pageClassName = isEmpty ? `page--favorites-empty` : `page--favorites`;
  const mainClassName = isEmpty ? `page__main--favorites-empty` : ``;

  return (
    <div className={pageClassName}>
      {renderHeader()}
      <main className={`page__main page__main--favorites ${mainClassName}`}>
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
  isEmpty: bool.isRequired,
  renderHeader: func.isRequired
};

export default React.memo(Favorites);
