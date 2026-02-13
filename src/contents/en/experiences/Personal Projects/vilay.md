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
  - A framework that facilitates the development of Relay-based SSR apps using Vite and vite-plugin-ssr.
---

It supports Suspense-based Streaming SSR with React 18 and Relay,<br>
and is configured to support Render-as-you-fetch by specifying GraphQL queries per page.

While looking for a suitable SSR framework to use in production at my company,<br>
I couldn't find an optimal framework for use with Relay, so I decided to create one myself.<br>
It is currently being used in the development of new products at my company.

It works well in edge runtime environments such as Cloudflare Workers,<br>
and advanced SSR techniques like Selective Hydration are planned to be applied in the future.

Although I previously received inquiries and open source contributions related to collaboration and usage from various channels,<br>
the framework has now been archived as we are no longer working on projects that use it.
