/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/member-ordering, sort-keys */
import { SpecResult, compare } from './SpecResult';

interface RunResults {
  success: number;
  failed: number;
  skipped: number;
  error: boolean;
  disconnected: boolean;
  exitCode: number;
}

interface BrowserResults {
  id: string;
  fullName: string;
  name: string;
  state: 'EXECUTING' | 'UMM';
  lastResult: {
    startTime: number;
    total: number;
    success: number;
    failed: number;
    skipped: number;
    totalTime: number;
    netTime: number;
    error: boolean;
    disconnected: boolean;
  };
  disconnectsCount: number;
  noActivityTimeout: number;
  disconnectDelay: number;
}

interface Helper {
  browserFullNameToShort: Function;
  isDefined: Function;
  mmPatternWeight: Function;
  mmComparePatternWeights: Function;
  isFunction: Function;
  isString: Function;
  isObject: Function;
  isArray: Function;
  isNumber: Function;
  isUrlAbsolute: Function;
  camelToSnake: Function;
  ucFirst: Function;
  dashToCamel: Function;
  arrayRemove: Function;
  merge: Function;
  formatTimeInterval: Function;
  normalizeWinPath: Function;
  mkdirIfNotExists: Function;
  defer: Function;
  saveOriginalArgs: Function;
  restoreOriginalArgs: Function;
}

const rrs: RunResults = {
  success: 2,
  failed: 0,
  skipped: 41,
  error: false,
  disconnected: false,
  exitCode: 0,
};

const a: BrowserResults = {
  id: '90308918',
  fullName:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
  name: 'Chrome 79.0.3945 (Windows 10.0.0)',
  state: 'UMM',
  lastResult: {
    startTime: 1578186014680,
    total: 43,
    success: 2,
    failed: 0,
    skipped: 38,
    totalTime: 0,
    netTime: 50,
    error: false,
    disconnected: false,
  },
  disconnectsCount: 0,
  noActivityTimeout: 30000,
  disconnectDelay: 2000,
};

interface LoggerFactory {
  create(name: string): Logger;

}

interface Logger {
  warn(message: string|number): void;
}

class TimerReporter {
  private specs: Map<string, SpecResult> = new Map();
  protected adapters: Function[] = [];
  protected log: Logger;
  public static $inject = ['helper', 'logger', 'config.timerReporter'];
  constructor(
    protected helper: Helper,
    protected logger: LoggerFactory,
    protected config: any
  ) {
    this.log = logger.create('reporter.timer');
  }
  public onBrowserComplete(browser: BrowserResults): void {
    console.log(browser.fullName);
  }
  public onSpecComplete(browser: any, result: SpecResult): void {
    console.log(browser);
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
