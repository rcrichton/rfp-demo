'use strict'

let moment = require('moment')

let transactions = [
  { requestTs: moment(), responseTs: moment().add(200, 'ms')},
  { requestTs: moment(), responseTs: moment().add(1500, 'ms') },
  { requestTs: moment(), responseTs: moment().add(500, 'ms') },
  { requestTs: moment(), responseTs: moment().add(2000, 'ms') },
  { requestTs: moment(), responseTs: moment().add(150, 'ms') },
  { requestTs: moment(), responseTs: moment().add(3000, 'ms') },
  { requestTs: moment(), responseTs: moment().add(500, 'ms') },
  { requestTs: moment(), responseTs: moment().add(1500, 'ms') }
]

let longDurations = transactions
  .map(t => t.responseTs.diff(t.requestTs))
  .filter(duration => duration > 1000)

console.log(longDurations)
