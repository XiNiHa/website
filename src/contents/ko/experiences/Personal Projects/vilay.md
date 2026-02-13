---
title:
  - Vilay
pageUrl: https://vilay.xiniha.dev
githubUrl: https://github.com/XiNiHa/vilay
order: 1
when: 2022.01 ~ 2022.08
stack:
  - TypeScript
  - Vite
  - vite-plugin-ssr
  - React
  - Relay
  - UnoCSS
fixedPart:
  - Vite와 vite-plugin-ssr을 기반으로 편리하게 Relay 기반의 SSR 앱을 개발할 수 있도록 돕는 프레임워크입니다.
---

React 18과 Relay를 사용하여 Suspense 기반의 Streaming SSR을 지원하며,<br>
페이지별로 GraphQL 쿼리를 지정해 Render-as-you-fetch를 지원하도록 구성하였습니다.

회사에서 프로덕션 제품 제작에 사용할 적절한 SSR 프레임워크를 찾다가,<br>
Relay와 사용하기에 최적의 프레임워크를 찾지 못해서 직접 만들게 되었으며,<br>
회사에서 개발한 신규 제품에도 실제로 적용하여 사용 중입니다.

Cloudflare Workers 등 엣지 런타임 환경에서도 잘 동작하며,<br>
추후 Selective Hydration 등의 고급 SSR 테크닉들도 적용할 예정입니다.

과거에는 다양한 경로에서 협업/사용 관련 문의나 오픈소스 기여 역시 받고 있었으나,<br>
해당 프레임워크를 사용하는 프로젝트를 더 이상 진행하지 않게 됨에 따라 현재는 아카이브 처리한 상태입니다.
