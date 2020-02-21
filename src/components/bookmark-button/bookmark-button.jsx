import React from 'react';
import PropTypes from 'prop-types';

const BookmarkButton = ({prefix, isFavorite, width, height}) => {
  return (
    <button className={`${prefix}__bookmark-button button ${isFavorite ? `${prefix}__bookmark-button--active` : ``}`} type="button">
      <svg className={`${prefix}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  prefix: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default BookmarkButton;
