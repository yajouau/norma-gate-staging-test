// Quality Gates production fixture (QSA-1968, case 1): one hardcoded secret.
// Expected finding: sec-generic-secret-assignment (Security Floor, Secrets) on line 4.

const dbPassword = "Spyglass-Prod-Gate-2026-case1!";

export function prodConnectionLabel1(): string {
  return `db password length ${dbPassword.length}`;
}
