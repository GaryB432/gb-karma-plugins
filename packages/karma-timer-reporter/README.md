# karma-timer-reporter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

This reporter will list your slowest running tests in your console.


## Installation

The easiest way is to keep `karma-timer-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-timer-reporter": "~0.1"
  }
}
```

You can add it to `package.json` with the following command:
```bash
npm install karma-timer-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'timer'],

    // the default configuration
    timerReporter: {
      maxLogLines: 10 // max slow tests to list
    },
    
    // add to plugins
    plugins: [
      // other plugins
      'karma-timer-reporter'
    ],

  });
};
```

[npm-image]: https://badge.fury.io/js/karma-timer-reporter.svg
[npm-url]: https://npmjs.org/package/karma-timer-reporter
[travis-image]: https://travis-ci.com/GaryB432/gb-karma-plugins.svg?branch=master
[travis-url]: https://travis-ci.com/GaryB432/gb-karma-plugins
