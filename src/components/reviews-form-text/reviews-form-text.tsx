import * as React from 'react';

interface Props {
  comment: string;
  onChange: (evt: React.ChangeEvent) => void;
}

const ReviewsFormText: React.FC<Props> = (props: Props) => {
  const {comment, onChange} = props;
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={comment}
      onChange={onChange}
    />
  );
};

export default React.memo(ReviewsFormText);
