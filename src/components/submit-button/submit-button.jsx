import React from 'react';
import {bool, string} from 'prop-types';

const SubmitButton = ({prefix, isDisabled}) => {
  const text = prefix === `login` ? `Sign in` : `Submit`;
  return (
    <button
      disabled={isDisabled}
      className={`${prefix}__submit form__submit button`}
      type="submit"
    >{text}</button>
  );
};

SubmitButton.propTypes = {
  prefix: string.isRequired,
  isDisabled: bool.isRequired
};

export default React.memo(SubmitButton);
