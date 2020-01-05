# karma-timer-reporter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Test reporter, that prints detailed results to console (similar to mocha's spec reporter).

## Usage

To use in your own Node.js project, just execute
```
npm install karma-timer-reporter --save-dev
```
This will download the karma-timer-reporter and add the dependency to `package.json`.

Then add ``'timer'`` to reporters in karma.conf.js, e.g.

```
reporters: ['timer']
```

## Configuration

To limit the number of lines logged per test or suppress specific reporting, use the `timerReporter` configuration in your
karma.conf.js file
``` js
//karma.conf.js
...
  config.set({
    ...
      reporters: ["timer"],
      timerReporter: {
        tbd: 5,             // limit number of lines logged per test
        failFast: true      // test would finish with error when a first fail occurs. 
      },
      plugins: ["karma-timer-reporter"],
    ...
```

## Contributing

### Running tests

To run the tests for the index.js file, run: `npm test`

[npm-image]: https://badge.fury.io/js/karma-timer-reporter.svg
[npm-url]: https://npmjs.org/package/karma-timer-reporter
[travis-image]: https://travis-ci.com/GaryB432/gb-karma-plugins.svg?branch=master
[travis-url]: https://travis-ci.com/GaryB432/gb-karma-plugins
