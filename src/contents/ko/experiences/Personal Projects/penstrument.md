---
title:
  - Penstrument
githubUrl: https://github.com/XiNiHa/Penstrument
order: 6
when: '2020.06'
stack:
  - C#
  - WinUI 3
  - teVirtualMIDI
fixedPart:
  - Wacom 등의 펜 태블릿을 MIDI 컨트롤러로 사용할 수 있게 만들어 주는 프로그램입니다.
---

Full Sail University의 포트폴리오 수업에서 진행한 프로젝트로.<br>
teVirtualMIDI라는 가상 MIDI 디바이스 생성용 드라이버를 사용하여<br>
펜 태블릿에서 입력받은 XY 좌표와 압력 수치를 MIDI 신호로 변환하여 내보내는 방식으로 동작하며,<br>
펜 태블릿을 DAW에 연결 시 마치 악기처럼 사용할 수 있도록 해 줍니다.

WinTab API 연동을 통하여 태블릿 정보를 직접 읽어오는 것을 시도하였으나,<br>
C/C++ API 연동 관련 지식이 부족하여 실패했던 것이 가장 아쉬운 프로젝트입니다.
