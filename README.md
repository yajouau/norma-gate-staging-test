# norma-gate-staging-test

Test fixture for the Norma Quality Gate on staging (Jira epic QSA-1968).

| Branch | Content | Expected check result |
|---|---|---|
| `clean-change` | `src/percent.ts`, no Security Floor issue | success |
| `floor-secret` | `src/db-config.ts`, hardcoded password on line 4 | failure, annotation on line 4 |
| `release/2.8` | copy of `main` | a pull request into it gets "skipped" |
