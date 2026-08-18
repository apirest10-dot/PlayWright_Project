# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert1.spec.ts >> Handling Alert
- Location: tests\Alert1.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph
  - generic [ref=e19]:
    - separator [ref=e20]
    - generic [ref=e21]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e22] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```