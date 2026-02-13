---
title:
  - Fluxus 인프라 재개발
isSubproject: true
stack:
  - SolidStart
  - Solid Relay
  - TailwindCSS
  - Rust
  - lazycsv
fixedPart:
  - 음악 유통 관련 자회사인 Fluxus의 인프라 재개발 작업을 진행하였습니다.
---

기존 인프라는 외주사를 통하여 개발되어 있었고,<br>
사업 성장에 따라 데이터 크기가 늘어나면서 성능 및 확장성 문제가 발생하여 재개발이 결정되었습니다.

신규 인프라의 성능 및 확장성 확보를 위해 스택 리서치 단계부터 적극적으로 참여하였으며,<br>
[StarRocks](https://www.starrocks.io/) 등의 고성능 OLAP PoC나 자체 고성능 CSV 파서인 [lazycsv](https://github.com/contentstech-com/crates/tree/main/crates/lazycsv)의 개발 등을 진행하였습니다.

이후 프론트엔드를 중심으로 개발 작업을 진행하였으며,<br>
이 과정에서 직접 개발한 라이브러리인 [Solid Relay](https://solid-relay.xiniha.dev)를 활용하여<br>
UX와 DX 양면에서 뛰어난 웹 프론트엔드를 개발하였습니다.

또한 GraphQL Tools의 Mocking 기능을 활용하여 API 없이 독립적으로 개발을 진행하였으며,<br>
이 과정에서 GraphQL 스키마 역시 주도적으로 설계하였습니다.
