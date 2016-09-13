'use strict'

let Rx = require('rx');
let moment = require('moment')

let getAsyncTransacations = () => {
  return Rx.Observable.from([
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 500 },
    { requestTs: moment(), responseTs: moment().add(1500, 'ms'), time: 1000  },
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 2000  },
    { requestTs: moment(), responseTs: moment().add(2000, 'ms'), time: 2500  },
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 3500  },
    { requestTs: moment(), responseTs: moment().add(3000, 'ms'), time: 4000  },
    { requestTs: moment(), responseTs: moment().add(500, 'ms'), time: 5500  },
    { requestTs: moment(), responseTs: moment().add(1500, 'ms'), time: 6000  }
  ]).delay(function (x) { return Rx.Observable.timer(x.time); })
}

/* Get stock data somehow */
const source = getAsyncTransacations();

const subscription = source
  .map(t => t.responseTs.diff(t.requestTs))
  .filter(duration => duration > 1000)
  .subscribe(
    duration => console.log(`Long running transaction detected! (${duration}ms)`),
    err => console.log(`Something went wrong: ${err.message}`)
  );

/* When we're done */
setTimeout(() => {
  console.log('Disposing!...');
  subscription.dispose();
}, 5000)
