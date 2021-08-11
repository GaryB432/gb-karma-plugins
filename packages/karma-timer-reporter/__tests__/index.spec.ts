const pluginDefs = require('../src');

describe('karma-timer-reporter module', () => {
  it('should initialize', () => {
    const timerDef = pluginDefs['reporter:timer'];
    expect(timerDef).toBeDefined();
    expect(Array.isArray(timerDef)).toBeTruthy();
  });
});
