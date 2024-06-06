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
  - <더 지니어스> 시리즈의 게임들을 웹으로 구현하는 것을 목표로 시작된 프로젝트입니다.
---

현재는 매우 불완전한 Relay 호환 GraphQL API 서버만 존재하며,<br>
계정 및 JWT 기반 인증 시스템, DM 등의 기능이 구현되었습니다.

Rust의 Procedual Macro 시스템을 활용한 각종 매크로를 직접 작성함으로써,<br>
적은 코드 양으로 Global Object Identification 구현 등의 문제를 해결하였습니다.

주후 Server-Driven UI와 GraphQL Subscription을 이용한 게임 시스템을 구현할 예정입니다.
