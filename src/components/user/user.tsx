import * as React from 'react';
import {UserType} from '../../types';

interface Props {
  prefix: string;
  user: UserType;
}

const User: React.FC<Props> = (props: Props) => {
  const {prefix, user} = props;
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

export default React.memo(User);
