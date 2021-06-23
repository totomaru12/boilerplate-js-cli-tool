/* eslint no-undef: 0 */
const { printSample } = require('./sample_module')

test('sample test', () => {
  expect(printSample()).toBe(true)
})
