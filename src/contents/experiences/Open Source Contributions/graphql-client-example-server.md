---
title_:
  - zth /
  - graphql-client-example-server
githubUrl: https://github.com/zth/graphql-client-example-server
order: 2
when: '2022 ~'
stack:
  - TypeScript
  - GraphQL Yoga
fixedPart:
  - GraphQL 클라이언트를
  - 테스트하기 위한 목적으로 제작된
  - 간단한 GraphQL API 예제 서버입니다.
---

<span class="nw">해당 프로젝트의 업데이트가</span>
<span class="nw">2020년 이후 멈춰 있었고,</span>
<span class="nw">이에 @defer나 @stream 등</span>
<span class="nw">최신 스펙을 지원하지 않아,</span>
<span class="nw">관련 테스트를 위해</span>
<span class="nw">프로젝트 전체를 최신화하였습니다.</span>

<span class="nw">기존에 사용하던 Apollo Server를</span>
<span class="nw">GraphQL Yoga 2.0로 교체하였고,</span>

<span class="nw">모킹 데이터 레이어를</span>
<span class="nw">Promise를 지원하는 형태로 수정하여</span>
<span class="nw">@defer 및 @stream을 지원하는</span>
<span class="nw">리졸버들을 구성하였습니다. [(#15)](https://github.com/zth/graphql-client-example-server/pull/15)</span>

<span class="nw">이후 메인테이너의 요청에 따라</span>
<span class="nw">Relay가 사용하는</span>
<span class="nw">비공식 @defer/stream 스타일을</span>
<span class="nw">지원할 수 있도록 하는</span>
<span class="nw">[envelop-plugin-relay-defer](https://github.com/XiNiHa/envelop-plugin-relay-defer)를 개발하고,</span>
<span class="nw">해당 플러그인을 적용하는</span>
<span class="nw">PR까지 마쳤습니다. [(#16)](https://github.com/zth/graphql-client-example-server/pull/16)</span>
