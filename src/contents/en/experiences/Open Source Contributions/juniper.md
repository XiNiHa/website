---
title_:
  - graphql-rust / juniper
githubUrl: https://github.com/graphql-rust/juniper
order: 6
when: '2021.03'
stack:
  - Rust
  - GraphQL
  - Rocket
fixedPart:
  - juniper is a server-side GraphQL framework for Rust.
---

juniper generally works with other backend frameworks,<br>
providing integration packages for popular backend frameworks.<br>
Among these, the integration package for the Rocket framework<br>
did not support the version of the latest master branch that includes async support,<br>
so I added support for it. [(#905)](https://github.com/graphql-rust/juniper/pull/905)
