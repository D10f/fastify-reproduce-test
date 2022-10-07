import { resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance) => {
  fastify.get('/get-file', (_request, reply) => {
    const rs = createReadStream(resolve(__dirname, 'index.ts'));
    // reply.header('content-type', 'application/octet-stream');
    reply.send(rs);
  });
};
