---
title_:
  - unocss / unocss
githubUrl: https://github.com/unocss/unocss
order: 3
when: '2022 ~'
stack:
  - TypeScript
  - Atomic CSS
fixedPart:
  - Tailwind CSS와 유사하지만, On-demand 방식으로 동작하는 Atomic CSS 라이브러리입니다.
---

UnoCSS는 여러 가지 프리셋을 통해서 다양한 기능들을 제공하는데,<br>
이 중 Attributify 프리셋은 Atomic CSS 클래스를 마치 일반 프로퍼티인 것처럼 지정할 수 있도록 해 주며,<br>
나아가 Valueless Attributify라는, 속성 이름을 태그에 그대로 적으면 스타일이 적용되는 방식의 기능 역시 제공합니다.<br>

하지만 해당 기능이 SolidJS에서는 작동하지 않는다는 [이슈가 보고되었고 (#878)](https://github.com/unocss/unocss/issues/878),<br>
UnoCSS가 생성하는 CSS가 SolidJS와 호환될 수 있도록 약간의 수정을 가하는 옵션을<br>
추가하는 방식으로 해당 이슈를 해결하였습니다. [(#899)](https://github.com/unocss/unocss/pull/899)
