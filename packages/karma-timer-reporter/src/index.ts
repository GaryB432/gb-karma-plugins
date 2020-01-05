import { SpecResult, compare } from './SpecResult';
import { RunResults, Browser, Logger, Helper, LoggerFactory } from './Karma';

interface TimerConfig {
  tbd: number;
}

class TimerReporter {
  protected static $inject = ['helper', 'logger', 'config.timerReporter'];
  protected adapters: Function[] = [];
  protected log: Logger;
  private specs: Map<string, SpecResult> = new Map();
  constructor(
    protected helper: Helper,
    protected logger: LoggerFactory,
    protected config: TimerConfig
  ) {
    this.log = logger.create('reporter.timer');
  }
  public onBrowserComplete(browser: Browser): void {
    console.log(browser.fullName);
    console.log(this.config.tbd);
  }
  public onSpecComplete(browser: Browser, result: SpecResult): void {
    console.log(browser.id, 'is fun');
    // this.log.warn(JSON.stringify(browser));
    // this.log.warn(JSON.stringify(result));
    this.specs.set(result.id, result);
    // this.log.warn(result.id);
  }
  public onRunComplete(
    _browsersCollection: never[],
    _results: RunResults
  ): void {
    const specs = Array.from(this.specs.values())
      .slice()
      .filter(s => !s.skipped);
    specs.sort(compare);
    const top = specs.slice(0, 5);
    for (const spec of top) {
      const message = `${spec.description} ${this.helper.formatTimeInterval(
        spec.time
      )}`;
      this.log.warn(message);
    }
    this.log.warn(specs.length);
  }
}

module.exports = {
  'reporter:timer': ['type', TimerReporter],
};
