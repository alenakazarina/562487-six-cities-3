import React from 'react';
import {arrayOf, string} from 'prop-types';

const MAX_IMAGES_COUNT = 6;

const Gallery = ({images}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.slice(0, MAX_IMAGES_COUNT).map((image, index) => (
        <div className={`property__image-wrapper`}
          style={{width: `259px`}}
          key={index}
        >
          <img className={`property__image`} src={image} alt="Interior photo" />
        </div>
      ))}
    </div>
  </div>
);

Gallery.propTypes = {
  images: arrayOf(string).isRequired,
};

export default React.memo(Gallery);
