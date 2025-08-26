---
title_:
  - Fluxus Infrastructure Rewrite
isSubproject: true
stack:
  - SolidStart
  - Solid Relay
  - TailwindCSS
  - Rust
  - lazycsv
fixedPart:
  - Proceeded with infrastructure rewrite work for Fluxus, a subsidiary related to music distribution.
---

The existing infrastructure was developed through an outsourcing company,<br>
and as the business grew and data size increased,<br>
performance and scalability issues arose, leading to the decision for redevelopment.

I actively participated from the stack research stage<br>
to ensure performance and scalability of the new infrastructure,<br>
and conducted high-performance OLAP PoC such as [StarRocks](https://www.starrocks.io/)<br>
and development of our own high-performance CSV parser [lazycsv](https://github.com/contentstech-com/crates/tree/main/crates/lazycsv).

Subsequently, I proceeded with development work centered on the frontend,<br>
and during this process, I developed an excellent web frontend in both UX and DX aspects<br>
by utilizing [Solid Relay](https://solid-relay.xiniha.dev), a library I developed myself.

Additionally, I proceeded with development independently without APIs<br>
by utilizing the Mocking functionality of GraphQL Tools,<br>
and during this process, I also took the lead in designing the GraphQL schema.
