// Quality Gates staging fixture (QSA-1968): a change with no Security Floor issue.
export function percentOf(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 100);
}
