import React from 'react';
import {arrayOf, string} from 'prop-types';

const Gallery = ({images}) => (
  <div className="property__gallery-container container">
    <div className="property__gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className={`property__image-wrapper`}
          style={{width: `259px`}}
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

export default Gallery;
