---
title:
  - DX Engineer @ PortOne
order: 4
when: 2022.10 ~ 2024.07
stack:
  - TypeScript
  - React
  - GraphQL
  - Vite
  - Solid
fixedPart:
  - Worked as a frontend/DX engineer at PortOne, a company building payment-related SaaS products.
---
As a DX engineer, I contributed across the board, from the payment SDK used by customers' developers
to the foundational tooling of the internal FE chapter, focusing on improving the development experience and performance both inside and outside the company.

- **JS payment SDK performance and maintainability improvements**
  The existing SDK was a single script with a jQuery dependency,
  suffering from degraded maintainability and a growing bundle size due to continued unstructured development.
  To solve this, I led the entire process, from raising the issue through execution and verification,
  of removing the jQuery dependency and designing a custom SWC/esbuild-based module system
  that enables per-feature lazy loading without ESM (for IE11 support).
  This reduced the bundle size by over 100KB,
  and the modularized codebase significantly sped up the whole team on tasks such as integrating new payment gateways.
- **Custom checkout UI rewrite**
  The existing checkout UI was a React SPA with initial loading performance issues.
  Judging that edge streaming SSR and server RPC would best solve this,
  I adopted SolidStart, the framework with the best support for those features at the time.
  As a result, it achieved an FCP of around 0.3 seconds under typical conditions,
  and reliably handled over 300,000 payment requests per month.
- **Admin console development environment improvements**
  The existing console used Next.js SSG despite functioning almost like an SPA,
  causing productivity issues such as slow builds and having to unnecessarily account for SSG during development.
  To solve this, I migrated the entire product to Vite, achieving results such as shorter build times.
  I also improved the development environment overall, such as upgrading outdated dependencies like Storybook and TypeScript,
  and introducing UnoCSS with a compatibility layer as an alternative to the Sass + CSS Modules styling
  that had become a headache due to soaring complexity and cumbersome usage.
- **Led company-wide GraphQL/Relay adoption**
  While discussing the introduction of an API Gateway on the MSA to improve FE DX,
  I proposed and actively led the adoption of GraphQL/Relay based on its frontend-side strengths such as normalized caching.
  To ensure a smooth adoption within the team, I ran onboarding sessions for chapter members,
  established the code structure of the Scala-based GraphQL Gateway server,
  and integrated SSE-based `@defer` support for Relay to leverage Concurrent Features,
  enabling every team member to work with GraphQL without difficulty.
- **Custom SVG chart component implementation**
  While developing a new analytics service, I implemented SVG chart components from scratch to meet
  the feature and UX requirements from product and design, such as responsive design, animations, and sticky axis labels.
  Through appropriate use of Framer Motion and scroll virtualization, I minimized performance degradation even with large datasets,
  and the reusability-focused design allowed the same components to be shared across other pages later on.
