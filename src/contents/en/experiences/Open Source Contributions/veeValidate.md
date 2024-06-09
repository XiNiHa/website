---
title_:
  - logaretm / vee-validate
githubUrl: https://github.com/logaretm/vee-validate
order: 7
when: '2020.10'
stack:
  - TypeScript
  - Vue.js 2
  - Jest
  - Vue Test Utils
fixedPart:
  - vee-validate is a leading input validation library for Vue.js.
---

vee-validate wraps input elements to be validated with the ValidationProvider component,<br>
automatically detecting elements with the v-model attribute to validate field values.

While it also provides a way to manually call the validate function for cases where v-model is not used or in other scenarios,<br>
there was an issue where elements with the v-model attribute were always designated as the target elements for validation.

I improved this behavior by adding the detectInput attribute to enable or disable this feature,<br>
and added test code using Jest. [(#2980)](https://github.com/logaretm/vee-validate/pull/2980)
