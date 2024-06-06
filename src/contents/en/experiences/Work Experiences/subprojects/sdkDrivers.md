---
title_:
  - JavaScript SDK Rework
isSubproject: true
stack:
  - TypeScript
  - Node.js
  - SWC
  - esbuild
fixedPart:
  - Reworked the JavaScript SDK to improve performance, maintainability, and usability.
---

Previously, the PortOne JavaScript SDK was a single fat script, with jQuery dependency,<br>
which resulted in poor loading performance and unnecessary overhead.

I reworked the whole architecture with several priorities in mind like removing jQuery dependency<br>
and lazy loading support per each functionality of the SDK,
while following business requirements like IE11 support.

To achieve this, I constructed a custom module system that works without any ESM support.

And I also configured a build system to transpile and bundle the core SDK and each functionality module,<br>
utilizing modern tools like SWC and esbuild.
