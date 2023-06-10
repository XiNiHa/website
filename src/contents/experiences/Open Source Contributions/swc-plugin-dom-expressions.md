---
title_:
  - modderme123 /
  - swc-plugin-jsx-dom-expressions
githubUrl: https://github.com/modderme123/swc-plugin-jsx-dom-expressions
order: 1
when: "2023"
stack:
  - Rust
  - swc
fixedPart:
  - SolidJS의 컴파일 타임
  - JSX 트랜스폼을 위한
  - Babel 플러그인의
  - swc 포트입니다.
---

<span class="nw">SolidJS의 JSX 트랜스폼은</span>
<span class="nw">JSX를 DOM 요소 생성과</span>
<span class="nw">상태 변화 구독으로 변환하는</span>
<span class="nw">작업을 수행하는데,</span>
<span class="nw">해당 트랜스폼이 Babel만을 지원하고 있어</span>
<span class="nw">이를 swc용으로 포팅하는 작업이</span>
<span class="nw">커뮤니티에서 시작되었으나,</span>
<span class="nw">진행 상황이 지지부진한 상태였습니다.</span>

<span class="nw">먼저 JSX 내에서 컴포넌트를 사용하는</span>
<span class="nw">경우에 대한 로직을 대거 추가하여,</span>
<span class="nw">일반 DOM 요소 외에도 컴포넌트를</span>
<span class="nw">JSX 내에서 사용할 수 있도록 개선했으며, [(#1)](https://github.com/modderme123/swc-plugin-jsx-dom-expressions/pull/1)</span>

<span class="nw">이후 상수 값 처리에 대한 최적화나</span>
<span class="nw">프레임워크 빌트인 컴포넌트 (For, Show 등)</span>
<span class="nw">처리 등의 추가기능을 구현하여</span>
<span class="nw">플러그인의 완성도를 높였습니다.</span>
