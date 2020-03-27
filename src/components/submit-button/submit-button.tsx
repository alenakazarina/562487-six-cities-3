import * as React from 'react';

interface Props {
  prefix: `login` | `reviews`;
  isDisabled: boolean;
};

const SubmitButton: React.FC<Props> = ({prefix, isDisabled}) => {
  const text = prefix === `login` ? `Sign in` : `Submit`;
  return (
    <button
      disabled={isDisabled}
      className={`${prefix}__submit form__submit button`}
      type="submit"
    >{text}</button>
  );
};

export default React.memo(SubmitButton);
