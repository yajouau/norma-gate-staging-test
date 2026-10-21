// Quality Gates staging fixture (QSA-2215 verification, case 2): one hardcoded secret.
// Expected finding: sec-generic-secret-assignment (Security Floor, Secrets) on line 4.

const dbPassword = "Spyglass-Stg-Gate-2026-case2!";

export function connectionLabel2(): string {
  return `db password length ${dbPassword.length}`;
}
