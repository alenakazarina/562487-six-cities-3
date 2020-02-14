import React from 'react';
import PropTypes from 'prop-types';

const BOOKMARK_CLASS = `bookmark-button--active`;

const BookmarkButton = ({prefix, isFavorite, width, height}) => {
  return (
    <button className={`${prefix}bookmark-button button ${isFavorite ? `${prefix}${BOOKMARK_CLASS}` : ``}`} type="button">
      <svg className={`${prefix}bookmark-icon`}
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
