'use strict'

let Rx = require('rx');
let moment = require('moment')

let getAsyncTransacations = () => {
  return Rx.Observable.from([
    { requestTs: moment(), responseTs: moment().add(200, 'ms'), time: 500 },
    { requestTs: moment(), responseTs: moment().add(1500, 'ms'), time: 1000  },
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 2000  },
    { requestTs: moment(), responseTs: moment().add(2000, 'ms'), time: 2500  },
    { requestTs: moment(), responseTs: moment().add(150, 'ms'), time: 3500  },
    { requestTs: moment(), responseTs: moment().add(3000, 'ms'), time: 4000  },
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 5500  },
    { requestTs: moment(), responseTs: moment().add(1500, 'ms'), time: 6000  }
  ]).delay(function (x) { return Rx.Observable.timer(x.time); })
}

const source = getAsyncTransacations();

const durations = source
  .map(t => t.responseTs.diff(t.requestTs))

const longTransactions = durations
  .filter(duration => duration > 1000)
  .subscribe(
    duration => console.log(`Long running transaction detected! (${duration}ms)`),
    err => console.log(`Something went wrong: ${err.message}`)
  );

const shortTransactions = durations
  .filter(duration => duration < 250)
  .subscribe(
    duration => console.log(`Really quick transaction detected! (${duration}ms)`),
    err => console.log(`Something went wrong: ${err.message}`)
  );

/* When we're done */
setTimeout(() => {
  console.log('Disposing longTransactions!...');
  longTransactions.dispose();
}, 3000)
setTimeout(() => {
  console.log('Disposing shortTransactions!...');
  shortTransactions.dispose();
}, 5000)
