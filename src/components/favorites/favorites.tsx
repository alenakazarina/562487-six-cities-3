import * as React from 'react';
import {connect} from 'react-redux';
import {AppUser} from '../../types';
import {getFavorites} from '../../reducers/favorites/selectors';
import Header from '../../components/header/header';
import Footer from '../footer/footer';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

interface Props {
  isAuth: boolean;
  user: AppUser;
  isEmpty: boolean;
}

const Favorites: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  isEmpty: getFavorites(state).length === 0
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
