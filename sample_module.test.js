/* global test expect */
const { printSample } = require('./sample_module')

test('sample test', () => {
  expect(printSample()).toBe(true)
})
