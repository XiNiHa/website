---
title_:
  - zth / graphql-client-example-server
githubUrl: https://github.com/zth/graphql-client-example-server
order: 2
when: '2022 ~'
stack:
  - TypeScript
  - GraphQL Yoga
fixedPart:
  - This is a simple GraphQL API example server created for the purpose of testing GraphQL clients.
---

The updates for this project had stopped since 2020, and it did not support the latest specs such as @defer and @stream.<br>
To facilitate related testing, I updated the entire project.

I replaced the previously used Apollo Server with GraphQL Yoga 2.0,<br>
and modified the mocking data layer to support Promises,<br>
configuring resolvers to support @defer and @stream. [(#15)](https://github.com/zth/graphql-client-example-server/pull/15)

Subsequently, at the maintainer's request, I developed the [envelop-plugin-relay-defer](https://github.com/XiNiHa/envelop-plugin-relay-defer)<br>
to support the unofficial @defer/stream style used by Relay, and completed a PR to apply the plugin. [(#16)](https://github.com/zth/graphql-client-example-server/pull/16)
