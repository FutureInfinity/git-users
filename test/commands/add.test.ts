/* eslint-disable no-console */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
import { expect, test } from '@oclif/test'

describe('add', () => {
  // clear db
  // Then Test

  test
    .stdout()
    .command(['add', 'JhonDoe', 'JhonDoe@gmail.com'])
    .it('runs add JhonDoe JhonDoe@gmail.com', ctx => {
      expect(ctx.stdout).to.contain('User JhonDoe Added Successfully!')
    })
})
