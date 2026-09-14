---
title:
  - Software Engineer @ Contents Technologies
order: 3
when: 2024.07 ~ 2025.08
stack:
  - TypeScript
  - Solid
  - Rust
  - GraphQL
fixedPart:
  - Worked as a full-stack engineer at Contents Technologies, a company operating various businesses based on music IP.
---
While filling gaps in the Solid ecosystem, the company's primary framework, by building foundational pieces such as a router and a data layer myself,
I developed mobile and web apps for a new business and rewrote the legacy stack of an existing business.

- **Mobile WebView app development and desktop web app transition**
  With Solid adopted as the organization's primary framework, I [ported Stackflow to Solid](https://github.com/daangn/stackflow/pull/473)
  to implement stack navigation in the mobile app, and developed a [plugin](https://github.com/contentstech-com/stackflow-plugin-omniflow) to add desktop support.
  This enabled a single codebase to use stack-based navigation on mobile and nested routing on desktop,
  improving productivity.
- **Rust-based GraphQL backend API development**
  I established best practices for schema design and code structure,
  and [forked](https://github.com/async-graphql/async-graphql/pull/1638) the GraphQL server framework to implement the latest Semantic Nullability proposal.
  This work was later merged into and used by 1Password's internal fork as well.
- **Music distribution infrastructure rewrite**
  I ran PoCs of OLAP databases such as StarRocks and ClickHouse to implement real-time analytics,
  developed the zero-copy-oriented [lazycsv](https://github.com/contentstech-com/crates/tree/main/crates/lazycsv) crate when a high-performance CSV parser became necessary for processing royalty settlement data,
  and built and adopted [Solid Relay](https://solid-relay.xiniha.dev), a Solid binding for Relay,
  to follow GraphQL best practices in the Solid web frontend.
