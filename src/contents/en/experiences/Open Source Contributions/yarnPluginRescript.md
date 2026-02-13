---
title:
  - reason-seoul / yarn-plugin-rescript
githubUrl: https://github.com/reason-seoul/yarn-plugin-rescript
order: 4
when: '2021'
stack:
  - TypeScript
  - Yarn 2
  - Yarn PnP
  - ReScript
fixedPart:
  - This is a plugin that helps ReScript work properly in Yarn 2's PnP environment.
---

Yarn PnP replaces the traditional module system that uses the node_modules directory.<br>
ReScript's dependency system, however, only works with a node_modules-based module system,<br>
so generally, Yarn PnP cannot be used with ReScript.

The role of this plugin is to circumvent this issue by using a node_modules-based module system<br>
only for dependencies referenced by ReScript.

I improved the plugin to resolve issues where dependencies of workspace members could not be fetched<br>
and where one member depended on another member in a Monorepo environment. [(#5)](https://github.com/reason-seoul/yarn-plugin-rescript/pull/5)
