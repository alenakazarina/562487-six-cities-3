import React from 'react';
import User from '../user/user';
import {userPropTypes, childrenPropTypes} from '../../types';

const PropertyHost = ({host, children}) => (
  <div className="property__host">
    <h2 className="property__host-title">Meet the host</h2>
    <User prefix={`property__host-`} user={host} />
    {children}
  </div>
);

PropertyHost.propTypes = {
  host: userPropTypes,
  children: childrenPropTypes
};

export default PropertyHost;
