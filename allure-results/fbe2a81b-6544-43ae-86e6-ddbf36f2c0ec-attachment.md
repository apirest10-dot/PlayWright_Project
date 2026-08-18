# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> Handling keyboard
- Location: tests\keyboard.spec.ts:2:5

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 183.82.6.121"
      - text: "Time: 2026-08-12T06:58:15Z"
      - text: "URL: https://www.google.com/search?q=playwright+openings+in+coimbatore&sca_esv=92515be6a0af561f&source=hp&ei=dRl8apiEHY6ihvcP0afykAs&iflsig=ABILxe8AAAAAanwnhZVS-g7WvrYP5YLyOd3gruWZFuVh&oq=PlayWright+openings+&gs_lp=Egdnd3Mtd2l6IhRQbGF5V3JpZ2h0IG9wZW5pbmdzICoCCAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiXV1AAWPADcAB4AJABAJgBjQGgAYIJqgEDMy43uAEDyAEA-AEBmAIKoALzCcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgUQLhiABMICCBAuGIAEGLEDwgILEC4YgAQYsQMY5QSYAwCSBwMxLjmgB505sgcDMS45uAfzCcIHBTItOC4yyAdBgAgB&sclient=gws-wiz&sei=hRl8avDTO_zFp84PlOycyAk"
```