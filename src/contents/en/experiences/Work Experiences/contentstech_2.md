---
title:
  - Software Engineer @ Contents Technologies
order: 1
when: 2026.04 ~
stack:
  - TypeScript
  - Solid
  - Rust
  - DataFusion
  - StarRocks
fixedPart:
  - Rejoined Contents Technologies, a company operating various businesses based on music IP, as a full-stack engineer.
---
Building on the Solid-based frontend and Rust backend foundation I established during my previous tenure,
I contribute across the board, spanning frontend, backend, infrastructure, and data pipelines.

- **Agent Skill-based AI prototype refactoring workflow**
  Prototypes built by product managers with AI had to be manually refactored by developers
  to match codebase conventions every time they were merged into the product codebase.
  To solve this, I documented best practices such as state management and code structuring conventions
  using Solid and Bunja, along with shared component design conventions, as Agent Skills,
  establishing a workflow where prototypes can be refactored by actively leveraging AI.
- **DSP analytics data processing pipeline**
  The music distribution business needed to process large volumes of analytics data delivered by each DSP.
  To minimize memory usage and maximize throughput, I built a streaming-oriented data processing
  and loading pipeline using Arrow, Parquet, and DataFusion.
  When loading data into StarRocks, I also structured a layered data modeling architecture
  using Async Materialized Views.
