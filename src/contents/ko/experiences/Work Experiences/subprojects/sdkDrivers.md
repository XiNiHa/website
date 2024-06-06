---
title_:
  - JavaScript SDK 재설계
isSubproject: true
stack:
  - TypeScript
  - Node.js
  - SWC
  - esbuild
fixedPart:
  - JavaScript SDK 재설계에 참여하여 성능과 유지보수성 및 사용성을 개선하였습니다.
---

기존 JS SDK는 단일한 스크립트 파일로 구성되었으며, jQuery에 의존하여 동작하였고,<br>
이는 로딩 성능 하락 및 불필요한 오버헤드의 원인이 되었습니다.

이를 해결하기 위해 전체 아키텍처를 다시 구성하였으며, jQuery 의존성을 제거하는 것,<br>
기능별 lazy loading 지원을 구현하는 것 등에 집중하면서도, IE11 지원 등 비즈니스 요구사항 역시 만족하였습니다.

이를 달성하기 위해 ESM 지원 없이도 동작하는 커스텀 모듈 시스템을 구현하였습니다.

또한 SDK와 기능별 모듈을 트랜스파일링하고 번들링하는 빌드 시스템을 SWC와 esbuild 등의 최신 도구들을 활용하여 구성하였습니다.
