import * as React from 'react';

interface Props {
  text: string;
  onChange: (evt: React.ChangeEvent) => void;
}

const ReviewsFormText: React.FC<Props> = (props: Props) => {
  const {text, onChange} = props;
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={text}
      onChange={onChange}
    />
  );
};

export default React.memo(ReviewsFormText);
