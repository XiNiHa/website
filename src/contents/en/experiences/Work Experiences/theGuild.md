---
title:
  - Software Engineer @ The Guild
order: 2
when: 2025.09 ~ 2026.02
stack:
  - TypeScript
  - React
  - GraphQL
  - PostgreSQL
fixedPart:
  - Worked as a full-stack engineer at The Guild, a company operating a GraphQL schema registry SaaS.
---
As a full-stack engineer, I worked on dashboard product features and led a structural migration of the account system.

- **Account Linking implementation**
  The OSS version of SuperTokens does not support Account Linking,
  which caused unnecessary duplicate accounts to be created for each sign-in method.
  To solve this, I implemented Account Linking at the application layer, bypassing SuperTokens,
  and merged existing duplicate accounts by writing a DB migration script that correctly handles
  every edge case identified through analysis of real production data.
