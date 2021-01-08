/**
 * @jest-environment node
 */

const apiHelper = require('./apiHelper')


test('test cacheGitHubAvatar', async () => {
  await apiHelper.cacheGitHubAvatar(['cw1997', 'winoros'])
  await apiHelper.cacheGitHubAvatar(['cw1997'])
  await apiHelper.cacheGitHubAvatar('goroutine')
})
