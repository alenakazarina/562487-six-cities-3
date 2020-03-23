import React from 'react';
import PropTypes from 'prop-types';
import {userPropTypes} from '../../types';

const User = ({prefix, user}) => {
  const {name, isPro, avatarUrl} = user;
  const proClass = isPro ? `${prefix}__avatar-wrapper--pro` : ``;
  const isHost = prefix === `property` ? `host-` : ``;
  const avatar = isHost ? `../${avatarUrl}` : avatarUrl;
  const size = prefix === `reviews` ? 54 : 74;
  return (
    <div className={`${prefix}__${isHost}user user`}>
      <div className={`${prefix}__avatar-wrapper user__avatar-wrapper ${proClass}`}>
        <img className={`${prefix}__avatar user__avatar`}
          src={avatar}
          width={size}
          height={size}
          alt={`${name} avatar`}/>
      </div>
      <span className={`${prefix}__user-name`}>
        {name}
      </span>
    </div>
  );
};

User.propTypes = {
  prefix: PropTypes.string.isRequired,
  user: userPropTypes
};

export default React.memo(User);
