---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Audio/DigitalAudioWorkstation
---

[有什么好用的打谱软件？ - 知乎](https://www.zhihu.com/question/23003386)


```lilypond
\version "2.20.0"

% This is a test file.

\header {
    title = "test"
    composer = "loli"
    opus = "Op. 0"
    tagline = ##f %去除默认页脚
}

% 绝对音高系统
% { c d e f g a b}
% 就是直接写音乐表达式

% 相对音高系统
% \relative 起始音 音乐表达式
\relative c' {
    %高音谱号
    \clef "treble"
    %alto tenor bass
    %中音 次中音 低音
    \key c \major
    \time 4/4
    tempo 4 88

    %我们知道，五线谱是一套绝对音高系统，但实际书写的时候，由于一首曲子的音域范围通常比较集中，若能使用某个音高为基准，其它音使用相对音高则更为方便。我们先绕开绝对音高，直接使用 LilyPond 提供的相对音高方式来书写音符。在示例中，我使用的是 \relative c' { ... } ，它表示接下来的音符以中央 C 为基准。
    %音符怎么写呢？直接用小写字母写出它的音名即可。
    %每升高一个八度，使用一个英文单引号，如： c、c'、c''
    %每降低一个八度，使用一个英文逗号，如：c,、c,,、c,,,

    %音符的时值通过数字 1 、 2 、 4 、 8 等来表示
    % c1 全音符
    % c2 二分音符
    % c4 四分音符
    % c8 八分音符
    % c4. 附点音符

    %小节线也会自动生成，如果你想明确指定小节线，则可以使用 | 竖线
    %~ 表示延音线
    %\break 强制换行，默认会自动排版
    %<c e g> 和弦
}

```
