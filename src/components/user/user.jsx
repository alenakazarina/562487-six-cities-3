import React from 'react';
import PropTypes from 'prop-types';
import {userPropTypes} from '../../types';

const PRO_USER_CLASS = `avatar-wrapper--pro`;

const User = ({prefix, user}) => {
  const {name, isPro, avatarUrl} = user;
  const proClass = isPro && `${prefix}${PRO_USER_CLASS}`;
  const size = prefix === `reviews__` ? 54 : 74;
  return (
    <div className={`${prefix}user user`}>
      <div className={`${prefix}avatar-wrapper user__avatar-wrapper ${proClass}`}>
        <img className={`${prefix}avatar user__avatar`}
          src={avatarUrl}
          width={size}
          height={size}
          alt={`${name} avatar`}/>
      </div>
      <span className={`${prefix}user-name`}>
        {name}
      </span>
    </div>
  );
};

User.propTypes = {
  prefix: PropTypes.string.isRequired,
  user: userPropTypes
};

export default User;
