import React, {PureComponent} from 'react';

const withDisabled = (Component) => {
  class WithDisabled extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isDisabled: false
      };
      this._setDisabled = this._setDisabled.bind(this);
    }

    _setDisabled(status) {
      this.setState({
        isDisabled: status
      });
    }

    render() {
      const {isDisabled} = this.state;

      return (
        <Component
          {...this.props}
          isDisabled={isDisabled}
          setDisabled={this._setDisabled}
        />
      );
    }
  }

  return WithDisabled;
};

export default withDisabled;
