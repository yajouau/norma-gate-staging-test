// Quality Gates staging fixture (QSA-1968): one hardcoded secret.
// Expected finding: sec-generic-secret-assignment (Security Floor, Secrets) on line 4.

const dbPassword = "Spyglass-Stg-Gate-2026!";

export function connectionLabel(): string {
  return `db password length ${dbPassword.length}`;
}
