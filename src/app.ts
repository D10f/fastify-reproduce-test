import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import Fastify from 'fastify';

export function build(opts = {}) {
  const app = Fastify(opts);

  app.get('/get-file', (_request, reply) => {
    const rs = createReadStream(resolve(__dirname, 'index.ts'));
    reply.header('content-type', 'application/octet-stream');
    reply.send(rs);
  });

  return app;
}
