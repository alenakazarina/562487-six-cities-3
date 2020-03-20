import User from './user';
import {API_MOCK_APP_USER} from '../../mocks/const';

const RAW_USER = API_MOCK_APP_USER;
const USER = {
  id: 1,
  email: `alena@gmail.com`,
  name: `Alena`,
  avatarUrl: `userAvatar`,
  isPro: true
};

describe(`User model`, () => {
  it(`User model should create user`, () => {
    expect(new User(RAW_USER)).toEqual(USER);
  });
});

