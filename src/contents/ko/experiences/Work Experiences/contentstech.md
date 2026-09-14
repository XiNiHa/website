---
title:
  - Software Engineer @ Contents Technologies
order: 3
when: 2024.07 ~ 2025.08
stack:
  - TypeScript
  - Solid
  - Rust
  - GraphQL
fixedPart:
  - 음악 IP 기반 다양한 사업을 진행하는 회사인 콘텐츠테크놀로지스에서 풀스택 개발자로 근무했습니다.
---
사내 주력 프레임워크인 Solid 생태계에 부족했던 라우터나 데이터 레이어 등의 기반을 직접 만들어 채우며,
신규 사업의 모바일 앱/웹앱 개발과 기존 사업의 레거시 스택 재작성을 함께 수행했습니다.

- **모바일 WebView 앱 개발 및 PC 웹앱 전환**
  조직 내에서 Solid를 사내 주 프레임워크로 채택한 상황에서, 모바일 앱에서의 스택 내비게이션 구현을 위해
  [Stackflow](https://github.com/daangn/stackflow)를 [Solid로 포팅](https://github.com/daangn/stackflow/pull/473)했고, PC 지원 추가를 위해 [관련 플러그인](https://github.com/contentstech-com/stackflow-plugin-omniflow)을 개발했습니다.
  이를 통해 단일 코드베이스로 모바일에서는 스택 기반 내비게이션을, PC에서는 중첩 라우팅을 사용할 수 있는
  환경을 구축하여 생산성 향상을 이루었습니다.
- **Rust 기반 GraphQL 백엔드 API 개발**
  스키마 디자인 및 코드 구조 측면에서의 베스트 프랙티스를 정립했고,
  Semantic Nullability 관련 최신 프로포절 구현을 위해 GraphQL 서버 프레임워크를 [포크했습니다.](https://github.com/async-graphql/async-graphql/pull/1638)
  해당 작업 내용은 이후에 1Password의 사내 포크에도 병합되어 사용되었습니다.
- **음원 유통 인프라 재개발**
  실시간 애널리틱스 기능 구현을 위해 StarRocks와 ClickHouse 등의 OLAP 데이터베이스 PoC를 진행했고,
  수익 정산 데이터 처리 시 고성능 CSV 파서가 필요해져 Zero copy를 지향하는 [lazycsv](https://github.com/contentstech-com/crates/tree/main/crates/lazycsv) crate를 개발했으며,
  Solid 웹 프론트엔드에서 GraphQL 베스트 프랙티스를 따르기 위해 Relay의 Solid 버전 바인딩인
  [Solid Relay](https://solid-relay.xiniha.dev)를 직접 개발하여 프론트엔드에 적용했습니다.
