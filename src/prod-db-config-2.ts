// Quality Gates production fixture (QSA-1968, case 2): one hardcoded secret.
// Expected finding: sec-generic-secret-assignment (Security Floor, Secrets) on line 4.

const dbPassword = "Spyglass-Prod-Gate-2026-case2!";

export function prodConnectionLabel2(): string {
  return `db password length ${dbPassword.length}`;
}
