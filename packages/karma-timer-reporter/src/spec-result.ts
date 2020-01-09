export interface SpecResult {
  fullName: string;
  description: string;
  id: string;
  log: string[];
  skipped: boolean;
  disabled: boolean;
  pending: boolean;
  success: boolean;
  suite: string[];
  time: number;
  executedExpectationsCount: number;
}

export function compare(a: SpecResult, b: SpecResult): number {
  return b.time - a.time;
}
