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
  - A program that allows pen tablets like Wacom to be used as MIDI controllers.
---

This project was conducted as part of a portfolio class at Full Sail University.<br>
It operates by using the teVirtualMIDI driver, which creates a virtual MIDI device,<br>
and converts the XY coordinates and pressure values received from the pen tablet into MIDI signals,<br>
allowing the pen tablet to be used like an instrument when connected to a DAW.

I attempted to directly read tablet information through WinTab API integration,<br>
but failed due to a lack of knowledge regarding C/C++ API integration, which remains the most regrettable part of this project.
