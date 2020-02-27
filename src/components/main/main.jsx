import React from 'react';
import {arrayOf, node, oneOfType, bool} from 'prop-types';

const Main = ({isEmpty, children}) => {
  return (
    <main className={`page__main page__main--index ${isEmpty ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
};

Main.propTypes = {
  isEmpty: bool.isRequired,
  children: oneOfType([node, arrayOf(node)])
};

export default React.memo(Main);
