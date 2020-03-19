import React, {PureComponent} from 'react';

const withLogin = (Component) => {
  class WithLogin extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        userLogin: ``,
        userPassword: ``
      };
      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange({currentTarget}) {
      switch (currentTarget.name) {
        case `email`:
          this.setState({
            userLogin: currentTarget.value
          });
          break;
        case `password`:
          this.setState({
            userPassword: currentTarget.value
          });
          break;
      }
    }

    render() {
      const {
        userLogin,
        userPassword
      } = this.state;

      return (
        <Component
          {...this.props}
          userLogin={userLogin}
          userPassword={userPassword}
          onChange={this._handleChange}
        />
      );
    }
  }

  return WithLogin;
};

export default withLogin;
