import React from 'react';
import {func, string} from 'prop-types';
import {capitalizeFirstLetter} from '../../utils';

const LoginInput = ({name, value, onChange}) => {
  const label = capitalizeFirstLetter(name);
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input className="login__input form__input"
        type={name}
        name={name}
        placeholder={label}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

LoginInput.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired
};

export default React.memo(LoginInput);
