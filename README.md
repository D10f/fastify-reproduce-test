This repo reproduces the issue of [missing content-type header when replying with stream data (#765)](https://github.com/fastify/help/issues/765)

### Steps to reproduce:

1. Clone repo
2. Run `npm install`.
3. Run `npm test`. It should fail initially.
4. In `route.ts`, uncomment line 8 to see the test succeed.
