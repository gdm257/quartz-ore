---
tags:
  - flag/License/Freeware
  - flag/Platform/Windows独占
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/Audio/OutputDevice/Midi
choco: virtualmidisynth
---

- Alternatives
    - [[OmniMIDI]]
    - [[AIMP]]

- Con
    - NOT Support WASAPI/ASIO Output
        - 音频输出最终还是奏微软自带的 DirectSound，跟独占比不了
        - 请用 [[OmniMIDI]]
            - [[OmniMIDI]] 功能上是 [[VirtualMIDISynth]] 的超集，支持 ASIO/WASAPI 输出
        - 请用 [[AIMP]]
            - 不但支持加载多个 SF2 音色库，还能秒加载。最重要的是，[[AIMP]] 音频输出可以走独占 WASAPI/ASIO。最终实现 SF2 + WASAPI
            - 不喜欢 [[AIMP]] 可换成 [[foobar2000]]
