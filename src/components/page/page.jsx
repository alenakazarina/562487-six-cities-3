import React from 'react';
import {string} from 'prop-types';
import {childrenPropTypes} from '../../types';
import Header from '../header/header';

const Page = ({className, children}) => (
  <div className={`page ${className}`}>
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  className: string.isRequired,
  children: childrenPropTypes
};

export default Page;
