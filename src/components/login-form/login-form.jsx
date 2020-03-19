import React, {PureComponent} from 'react';
import {func, bool, string, number} from 'prop-types';
import LoginInput from '../login-input/login-input';
import SubmitButton from '../submit-button/submit-button';

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate({errorStatus}) {
    if (errorStatus) {
      this.props.setDisabled(false);
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {userLogin, userPassword} = this.props;
    this.props.setDisabled(true);
    this.props.login({
      login: userLogin,
      password: userPassword
    });
  }

  render() {
    const {
      userLogin,
      userPassword,
      isDisabled,
      onChange
    } = this.props;

    return (
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <fieldset
          disabled={isDisabled}
          style={{border: `none`, padding: `0`}}
        >
          <LoginInput
            key={`email`}
            name={`email`}
            value={userLogin}
            onChange={onChange}
          />
          <LoginInput
            key={`password`}
            name={`password`}
            value={userPassword}
            onChange={onChange}
          />
          <SubmitButton
            prefix="login"
            isDisabled={isDisabled}
          />
        </fieldset>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userLogin: string.isRequired,
  userPassword: string.isRequired,
  errorStatus: number.isRequired,
  isDisabled: bool.isRequired,
  setDisabled: func.isRequired,
  onChange: func.isRequired,
  login: func.isRequired
};

export default LoginForm;
