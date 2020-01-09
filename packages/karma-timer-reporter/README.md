# karma-timer-reporter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

This reporter will list your slowest running tests in your console.

## Usage

To use in your own Node.js project, just execute

```
npm install karma-timer-reporter --save-dev
```

This will download the karma-timer-reporter and add the dependency to `package.json`.

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
