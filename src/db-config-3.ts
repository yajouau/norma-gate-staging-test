// Quality Gates staging fixture (QSA-2215 verification, case 3): one hardcoded secret.
// Expected finding: sec-generic-secret-assignment (Security Floor, Secrets) on line 4.

const dbPassword = "Spyglass-Stg-Gate-2026-case3!";

export function connectionLabel3(): string {
  return `db password length ${dbPassword.length}`;
}
