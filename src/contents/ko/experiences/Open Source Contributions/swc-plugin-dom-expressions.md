---
title:
  - modderme123 / swc-plugin-jsx-dom-expressions
githubUrl: https://github.com/modderme123/swc-plugin-jsx-dom-expressions
order: 1
when: '2023'
stack:
  - Rust
  - swc
fixedPart:
  - SolidJS의 컴파일 타임 JSX 트랜스폼을 위한 Babel 플러그인의 swc 포트입니다.
---

SolidJS의 JSX 트랜스폼은 JSX를 DOM 요소 생성과 상태 변화 구독으로 변환하는 작업을 수행하는데,<br>
해당 트랜스폼이 Babel만을 지원하고 있어 이를 swc용으로 포팅하는 작업이 커뮤니티에서 시작되었으나,<br>
진행 상황이 지지부진한 상태였습니다.

먼저 JSX 내에서 컴포넌트를 사용하는 경우에 대한 로직을 대거 추가하여,<br>
일반 DOM 요소 외에도 컴포넌트를 JSX 내에서 사용할 수 있도록 개선했으며, [(#1)](https://github.com/modderme123/swc-plugin-jsx-dom-expressions/pull/1)

이후 상수 값 처리에 대한 최적화나 프레임워크 빌트인 컴포넌트 (For, Show 등) 처리 등의<br>
추가기능을 구현하여 플러그인의 완성도를 높였습니다.
