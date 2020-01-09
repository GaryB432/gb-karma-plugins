# karma-timer-reporter

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

This reporter will list your slowest running tests in your console.

## Usage

To use in your own Node.js project, just execute

```
npm install karma-timer-reporter --save-dev
```

This will download the karma-timer-reporter and add the dependency to `package.json`.

Then add `'timer'` to reporters in karma.conf.js, e.g.

```
reporters: ['timer']
```

## Configuration

To limit the number of slow tests listed, use the `timerReporter` configuration in your karma.conf.js file

```js
//karma.conf.js
...
  config.set({
    ...
      reporters: ["timer"],
      timerReporter: {
        maxLogLines: 5, // limit number of lines logged per test, default is 10
      },
      plugins: ["karma-timer-reporter"],
    ...
```

[npm-image]: https://badge.fury.io/js/karma-timer-reporter.svg
[npm-url]: https://npmjs.org/package/karma-timer-reporter
[travis-image]: https://travis-ci.com/GaryB432/gb-karma-plugins.svg?branch=master
[travis-url]: https://travis-ci.com/GaryB432/gb-karma-plugins
