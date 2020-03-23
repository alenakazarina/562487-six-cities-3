import React, {PureComponent} from 'react';
import {func, number} from 'prop-types';
import Message from '../../components/message/message';

const withMessage = (Component) => {
  class WithMessage extends PureComponent {
    render() {
      const {errorStatus, resetError} = this.props;
      return (
        <>
          {errorStatus ? <Message
            status={errorStatus}
            onClose={resetError}
          /> : ``}
          <Component {...this.props} />
        </>
      );
    }
  }

  WithMessage.propTypes = {
    errorStatus: number.isRequired,
    resetError: func.isRequired
  };

  return WithMessage;
};

export default withMessage;
