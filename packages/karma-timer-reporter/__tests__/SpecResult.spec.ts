/* eslint-disable sort-keys */
import { compare, SpecResult } from '../src/SpecResult';

describe('SpecResult', () => {
  it('should initialize', () => {
    const a: SpecResult = {
      fullName: 'More Logic Service should predict aisle properly',
      description: 'should predict aisle properly',
      id: 'spec34',
      log: [],
      skipped: true,
      disabled: true,
      pending: false,
      success: true,
      suite: ['More Logic Service'],
      time: 0,
      executedExpectationsCount: 0,
    };

    const b: SpecResult = {
      fullName: 'More Logic Service should predict aisle properly',
      description: 'should predict aisle properly',
      id: 'spec35',
      log: [],
      skipped: true,
      disabled: true,
      pending: false,
      success: true,
      suite: ['More Logic Service'],
      time: 0,
      executedExpectationsCount: 0,
    };
    a.time = 1;
    b.time = 2;
    expect(compare(a, b)).toBe(-1);
  });
});
