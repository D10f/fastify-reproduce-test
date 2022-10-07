import { test, expect } from 'vitest';
import supertest from 'supertest';
import { startServer } from './app';

const server = startServer();

test('Should receive a Buffer', async () => {
  const res = await supertest(server.server).get('/get-file').send();
  expect(res.headers).toHaveProperty('content-type');
  expect(res.headers['content-type']).toBe('application/octet-stream');
  expect(res.body).toBeInstanceOf(Buffer);
});
