---
title_:
  - Webgame Collection
githubUrl: https://github.com/XiNiHa/webgame-collection-api
order: 3
when: 2021 ~ WIP
stack:
  - Rust
  - async-graphql
  - actix-web
  - PostgreSQL
  - Redis
fixedPart:
  - A project aimed at creating web versions of games from the series <The Genius>.
---

Currently, only a very incomplete Relay-compatible GraphQL API server exists,<br>
with implemented features such as account and JWT-based authentication systems and direct messaging (DM).

By writing various macros using Rust's Procedural Macro system,<br>
issues like implementing Global Object Identification with minimal code were resolved.

Future plans include implementing a game system using Server-Driven UI and GraphQL Subscription.
