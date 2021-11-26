---
title_:
  - reason-seoul /
  - yarn-plugin-rescript
githubUrl: https://github.com/reason-seoul/yarn-plugin-rescript
order: 1
when: "2021 ~"
stack:
  - TypeScript
  - Yarn 2
  - Yarn PnP
  - ReScript
fixedPart:
  - Yarn 2의 PnP 환경에서
  - ReScript가 정상적으로 동작할 수
  - 있도록 돕는 플러그인입니다.
---

<span class="nw">Yarn PnP는 node_modules 디렉토리를</span>
<span class="nw">사용하는 고전적 모듈</span>
<span class="nw">시스템을 대체하는데,</span>

<span class="nw">ReScript의 의존성 시스템은</span>
<span class="nw">node_modules 기반</span>
<span class="nw">모듈 시스템에서만 작동하고,</span>

<span class="nw">따라서 일반적인 상황에선</span>
<span class="nw">Yarn PnP와 ReScript를</span>
<span class="nw">같이 사용할 수 없습니다.</span>

<span class="nw">이를 ReScript에서 참조하는</span>
<span class="nw">의존성들에 대해서만</span>

<span class="nw">node_modules 기반</span>
<span class="nw">모듈 시스템을 사용하여</span>

<span class="nw">문제를 회피하도록 하는 것이</span>
<span class="nw">이 플러그인의 역할입니다.</span>

<span class="nw">Monorepo 환경에서 워크스페이스 멤버의</span>
<span class="nw">의존성을 불러오지 못하는 문제와,</span>

<span class="nw">한 멤버가 다른 멤버에 의존하는 경우에</span>
<span class="nw">정상적으로 동작하지 않는 문제가 존재하여,</span>

<span class="nw">해당 부분을 개선하였습니다. [(#5)](https://github.com/reason-seoul/yarn-plugin-rescript/pull/5)</span>
