import api from '../../api/api.js';

describe('Api should', () => {
  test('return empty result when user is not following any users', () => {
    const userId = 1;

    const result = api.getPostsFromFollowingByUserId(userId);

    expect(result).toEqual(expect);
  });
});
