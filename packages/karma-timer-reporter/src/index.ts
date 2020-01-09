import { SpecResult, compare } from './spec-result';
import { RunResults, Browser, Logger, Helper, LoggerFactory } from './karma';

interface TimerConfig {
  maxLogLines: number;
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
  public onSpecComplete(browser: Browser, result: SpecResult): void {
    this.specs.set(result.id, result);
  }
  public onRunComplete(
    _browsersCollection: never[],
    _results: RunResults
  ): void {
    const specs = Array.from(this.specs.values())
      .slice()
      .filter(s => !s.skipped);
    specs.sort(compare);
    const top = specs.slice(0, this.config.maxLogLines || 10);
    for (const spec of top) {
      const message = `${spec.fullName} ${this.helper.formatTimeInterval(
        spec.time
      )}`;
      this.log.info(message);
    }
  }
}

module.exports = {
  'reporter:timer': ['type', TimerReporter],
};
