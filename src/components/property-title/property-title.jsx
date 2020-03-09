import React from 'react';
import {string} from 'prop-types';
import {childrenPropTypes} from '../../types';

const PropertyTitle = ({title, children}) => (
  <div className="property__name-wrapper">
    <h1 className="property__name">{title}</h1>
    {children}
  </div>
);

PropertyTitle.propTypes = {
  title: string.isRequired,
  children: childrenPropTypes
};

export default React.memo(PropertyTitle);
