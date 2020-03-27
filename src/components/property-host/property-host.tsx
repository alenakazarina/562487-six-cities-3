import * as React from 'react';
import {UserType} from '../../types';
import User from '../user/user';

type Props = {
  host: UserType;
  children: React.ReactElement;
}

const PropertyHost: React.FC<Props> = (props: Props) => {
  const {host, children} = props;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <User prefix={`property`} user={host} />
      {children}
    </div>
  );
};

export default React.memo(PropertyHost);
