---
title:
  - Account Linking Migration
isSubproject: true
stack:
  - React
  - GraphQL
  - PostgreSQL
  - SuperTokens
fixedPart:
  - Enabled multiple sign-in methods to be linked to a single account.
---

The product used SuperTokens to implement its authentication system,<br>
and one of its limitations was that each account could only have a single sign-in method.

This encouraged users to create multiple accounts by signing up with different methods,<br>
which led to duplicated accounts with the same email and became a hurdle for future feature work and expansion.

To address this, I implemented Account Linking at the application layer,<br>
independent from SuperTokens, so that multiple sign-in methods could be connected to a single account.

For existing users with duplicated emails, I also led the account merge process by writing<br>
a DB migration script based on real production data and a wide range of edge cases.
