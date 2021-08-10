/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/member-ordering, sort-keys */

const rrs: RunResults = {
  success: 2,
  failed: 0,
  skipped: 41,
  error: false,
  disconnected: false,
  exitCode: 0,
};

const a: Browser = {
  id: '90308918',
  fullName:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
  name: 'Chrome 79.0.3945 (Windows 10.0.0)',
  state: 'UMM',
  lastResult: {
    startTime: 1578186014681,
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

export interface RunResults {
  success: number;
  failed: number;
  skipped: number;
  error: boolean;
  disconnected: boolean;
  exitCode: number;
}
export interface Browser {
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

export interface Helper {
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

export interface LoggerFactory {
  create(name: string): Logger;
}

export interface Logger {
  info(message: string | number): void;
  warn(message: string | number): void;
}
