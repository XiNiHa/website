---
title_:
  - API Backend for Welcoach Shop
isSubproject: true
stack:
  - Node.js
  - Fastify
  - Envelop
  - GraphQL
  - Schema Stitching
  - Terraform
  - AWS EKS, RDS, SQS, etc.
fixedPart:
  - Created an MSA backend for providing additional features to a Shopify store.
---

Utilizing the Schema Stitching feature of GraphQL Tools, I created a single supergraph API<br>
that merges multiple microservices into a single API that can be used by the frontend conveniently.

By integrating with the API provided by SBN, I created a service flow that allows customers to purchase<br>
a blood test appointment from the shop, take the test, and receive a report that is created with our own algorithm.
