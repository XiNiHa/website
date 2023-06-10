---
title_:
  - unocss /
  - unocss
githubUrl: https://github.com/unocss/unocss
order: 3
when: "2022 ~"
stack:
  - TypeScript
  - Atomic CSS
fixedPart:
  - Tailwind CSS와 유사하지만,
  - On-demand 방식으로 동작하는
  - Atomic CSS 라이브러리입니다.
---

<span class="nw">UnoCSS는 여러 가지</span>
<span class="nw">프리셋을 통해서</span>
<span class="nw">다양한 기능들을 제공하는데,</span>

<span class="nw">이 중 Attributify 프리셋은</span>
<span class="nw">Atomic CSS 클래스를 마치</span>
<span class="nw">일반 프로퍼티인 것처럼</span>
<span class="nw">지정할 수 있도록 해 주며,</span>

<span class="nw">나아가 Valueless Attributify라는,</span>
<span class="nw">속성 이름을 태그에 그대로 적으면</span>
<span class="nw">스타일이 적용되는 방식의</span>
<span class="nw">기능 역시 제공합니다.</span>

<span class="nw">하지만 해당 기능이</span>
<span class="nw">SolidJS에서는 작동하지 않는다는</span>
<span class="nw">[이슈가 보고되었고 (#878)](https://github.com/unocss/unocss/issues/878),</span>

<span class="nw">UnoCSS가 생성하는 CSS가</span>
<span class="nw">SolidJS와 호환될 수 있도록</span>
<span class="nw">약간의 수정을 가하는</span>
<span class="nw">옵션을 추가하는 방식으로</span>
<span class="nw">해당 이슈를 해결하였습니다. [(#899)](https://github.com/unocss/unocss/pull/899)</span>
