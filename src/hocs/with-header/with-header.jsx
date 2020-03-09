import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../../components/header/header';

const HeaderWrapped = withRouter(Header);

const withHeader = (Component) => {
  class WithHeader extends PureComponent {
    render() {
      return (
        <Component
          {...this.props}
          renderHeader={() => <HeaderWrapped />}
        />
      );
    }
  }

  return WithHeader;
};

export default withHeader;
