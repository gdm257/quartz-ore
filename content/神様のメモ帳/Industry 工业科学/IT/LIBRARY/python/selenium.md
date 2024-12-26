---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/Browser
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[selenium实现并发 - DreamBoy_张亚飞 - 博客园](https://www.cnblogs.com/zhangyafei/p/11075243.html)

[pytest结合selenium grid实现web自动化测试并发执行 - 墨天轮](https://www.modb.pro/db/108069)

[scrapy-splash 教程 — splash中文文档 0.1 文档](https://splash-cn-doc.readthedocs.io/zh_CN/latest/scrapy-splash-toturial.html)

[SeleniumHQ/docker-selenium: Docker images for Selenium Grid](https://github.com/SeleniumHQ/docker-selenium)

[browserless/chrome: The browserless Chrome service in Docker. Run on our cloud, or bring your own.](https://github.com/browserless/chrome)


```python
selenium 没法并发，因为 find element etc 操作只针对 current tab，切换 tab 后 driver 是不会管的，所以并发还得靠 requests/aiohttp。
要并发只能创建多个 driver，但多个 driver 相当于同时打开多个浏览器，而 Firefox 不支持同时打开多个，尤其是同一 profile 的情况下。
加上 selenium 需要外带 webdriver 和 browser，所以 selenium 不适合做爬虫，爬取效率太低了。

配合 Selenium IDE 的录制功能，写起来就很轻松。
webdriver 文件本身并不是浏览器、也不是内核，而是用来「调用」浏览器的。
所以我们需要安装 3 样东西：
pip install selenium
scoop install -g chromedriver geckodriver
browser (chrome/firefox)
browser 就是我们平常使用的浏览器，为了能让浏览器被 webdriver 调用，要么浏览器装在默认路径，要么在代码中指定浏览器程序路径。

    WebDriver is an API and protocol that defines a language-neutral interface for controlling the behaviour of web browsers.

    Before you can start writing Selenium code, you have to install the language bindings libraries for your language of choice, the browser you want to use, and the driver for that browser.


Selenium Webdriver Browser 版本之间有对应关系，详见 [Supported platforms — Firefox Source Docs documentation](https://firefox-source-docs.mozilla.org/testing/geckodriver/Support.html)

简单说，对于 Firefox
geckodriver    Selenium    Firefox(min)    Firefox(max)
0.31.0         ≥ 3.11      91 ESR          n/a(2022.05)
0.30.0         ≥ 3.11      78 ESR          90
0.29.1         ≥ 3.11      60              90

Chromedriver 版本号与 Chrome 版本号是保持一致的，例如 Chromdriver 86.x.xxx.xx 适用于 Chrome 86


from selenium.webdriver.chrome.options import Options
opt = Options()
opt.binary_location = "C:/chrome/chrome.exe"  # 指定chrome路径
wd = Chrome(options=opt, executable_path='/path/to/chromedriver')


```