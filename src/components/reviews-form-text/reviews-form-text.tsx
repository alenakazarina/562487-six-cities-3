import * as React from 'react';

interface Props {
  value: string;
  onChange: (evt: React.ChangeEvent) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
};

const ReviewsFormText: React.FC<Props> = ({value, onChange, inputRef}) => (
  <textarea
    className="reviews__textarea form__textarea"
    id="review"
    name="review"
    placeholder="Tell how was your stay, what you like and what can be improved"
    value={value}
    onChange={onChange}
    ref={inputRef}
  />
);

export default React.memo(ReviewsFormText);
