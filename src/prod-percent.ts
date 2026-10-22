// Quality Gates production fixture (QSA-1968): a change with no Security Floor issue.
export function ratioOf(part: number, total: number): number {
  if (total <= 0) return 0;
  return part / total;
}
