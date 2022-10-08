This repo reproduces the issue of [missing content-type header when replying with stream data (#765)](https://github.com/fastify/help/issues/765)

### Steps to reproduce:

1. Clone repo
2. Run `npm install`.
3. Run `npm test`. Tests should succeed initially.
4. In `app.ts`, comment out line 10 to see tests fail.
5. Optional: delete `index.ts` to see tests fail. Related to "fastify" or "vitest"?
