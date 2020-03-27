import * as React from 'react';
import {capitalizeFirstLetter} from '../../utils';

interface Props {
  name: string;
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

const LoginInput: React.FC<Props> = ({name, value, onChange, inputRef})=> {
  const label = capitalizeFirstLetter(name);
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input className="login__input form__input"
        ref={inputRef}
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

export default React.memo(LoginInput);
