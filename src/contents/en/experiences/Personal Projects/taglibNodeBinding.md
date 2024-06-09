---
title_:
  - taglib-node-binding
githubUrl: https://github.com/XiNiHa/taglib-node-binding
order: 8
when: '2019.09'
stack:
  - TypeScript
  - C++
  - node-addon-api
  - CMake.js
  - TagLib
fixedPart:
  - Node.js binding for the C++ music file tag management library TagLib.
---

I created a type-safe binding using TypeScript,<br>
set up the build system using CMake.js, including adding the TagLib dependency,<br>
and successfully published it on NPM.

Although I planned to add many features such as a Promise-based API, the project is currently on hold due to a lack of personal interest.
