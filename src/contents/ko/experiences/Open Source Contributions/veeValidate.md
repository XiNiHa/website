---
title:
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
  - vee-validate는 대표적인 Vue.js 지원 입력 검증 라이브러리입니다.
---

vee-validate는 ValidationProvider 컴포넌트로 검증할 Input 요소를 감싸 필드값을 검증하는데,<br>
이때 v-model 속성이 있는 요소를 자동으로 탐색합니다.

v-model 속성을 사용하지 않는 경우나, 기타 다양한 경우를 위해 수동으로 validate 함수를 호출하는 방식 역시 제공하지만,<br>
v-model 속성을 가진 요소가 존재할 경우 무조건적으로 해당 요소를 검증 대상 요소로 지정하는 문제가 있었습니다.

이 동작을 detectInput 속성을 통해 (비)활성화 할 수 있도록 개선하고, Jest를 활용한 테스트 코드도 추가하였습니다. [(#2980)](https://github.com/logaretm/vee-validate/pull/2980)
