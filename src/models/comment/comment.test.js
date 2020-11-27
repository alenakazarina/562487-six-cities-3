import Comment from './comment';
import {DATES} from '../../mocks/const';

const RAW_COMMENT_DATE = DATES[0].toISOString();
const COMMENT_DATE = new Date(RAW_COMMENT_DATE);

const RAW_COMMENT = {
  'comment': `Comment`,
  'date': RAW_COMMENT_DATE,
  'id': 5,
  'rating': 5,
  'user': {
    'avatar_url': `keks_avatar.jpg`,
    'id': 1,
    'is_pro': true,
    'name': `Keks`
  }
};

const COMMENT = {
  comment: `Comment`,
  date: COMMENT_DATE,
  id: 5,
  rating: 5,
  user: {
    avatarUrl: `keks_avatar.jpg`,
    id: 1,
    isPro: true,
    name: `Keks`
  }
};

describe(`Comment model`, () => {
  it(`Comment model should create a comment`, () => {
    expect(new Comment(RAW_COMMENT)).toEqual(COMMENT);
  });
});
