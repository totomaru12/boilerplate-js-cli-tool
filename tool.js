const { printSample } = require('./sample_module')
const { program } = require('commander')

const main = () => {
  const options = program
    .description('javascript cli tool boilerplate')
    .option('-p --print', 'print sample string')
    .addHelpText('after',
`
Example:
$ node tool -p
`)
    .parse(process.argv)
    .opts()
  if (options.print) {
    printSample()
  }
}

main()
