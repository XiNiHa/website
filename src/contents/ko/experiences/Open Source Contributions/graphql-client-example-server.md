---
title:
  - zth / graphql-client-example-server
githubUrl: https://github.com/zth/graphql-client-example-server
order: 2
when: '2022 ~'
stack:
  - TypeScript
  - GraphQL Yoga
fixedPart:
  - GraphQL 클라이언트를 테스트하기 위한 목적으로 제작된 간단한 GraphQL API 예제 서버입니다.
---

해당 프로젝트의 업데이트가 2020년 이후 멈춰 있었고, 이에 @defer나 @stream 등 최신 스펙을 지원하지 않아,<br>
관련 테스트를 위해 프로젝트 전체를 최신화하였습니다.

기존에 사용하던 Apollo Server를 GraphQL Yoga 2.0로 교체하였고,<br>
모킹 데이터 레이어를 Promise를 지원하는 형태로 수정하여<br>
@defer 및 @stream을 지원하는 리졸버들을 구성하였습니다. [(#15)](https://github.com/zth/graphql-client-example-server/pull/15)

이후 메인테이너의 요청에 따라 Relay가 사용하는 비공식 @defer/stream 스타일을 지원할 수 있도록 하는<br>
[envelop-plugin-relay-defer](https://github.com/XiNiHa/envelop-plugin-relay-defer)를 개발하고,
해당 플러그인을 적용하는 PR까지 마쳤습니다. [(#16)](https://github.com/zth/graphql-client-example-server/pull/16)
