---
title_:
  - modderme123 / swc-plugin-jsx-dom-expressions
githubUrl: https://github.com/modderme123/swc-plugin-jsx-dom-expressions
order: 1
when: '2023'
stack:
  - Rust
  - swc
fixedPart:
  - This is an swc port of a Babel plugin for SolidJS's compile-time JSX transform.
---

SolidJS's JSX transform converts JSX into DOM element creation and state change subscriptions.<br>
Since this transform only supported Babel, a community effort was started to port it to swc,<br>
but the progress had been slow.

First, I added a significant amount of logic for handling the use of components within JSX,<br>
improving the plugin to support not only general DOM elements but also components within JSX. [(#1)](https://github.com/modderme123/swc-plugin-jsx-dom-expressions/pull/1)

Later, I implemented additional features such as optimizations for handling constant values<br>
and support for framework built-in components (e.g., For, Show), enhancing the completeness of the plugin.
