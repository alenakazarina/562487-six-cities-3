import * as React from 'react';

type Props = {
  title: string,
  children: React.ReactElement
};

const PropertyTitle: React.FC<Props> = ({title, children}) => (
  <div className="property__name-wrapper">
    <h1 className="property__name">{title}</h1>
    {children}
  </div>
);

export default React.memo(PropertyTitle);
