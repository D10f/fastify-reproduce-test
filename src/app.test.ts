import { describe, test, expect, afterAll } from 'vitest';
import supertest from 'supertest';
import { build } from './app';

let app = build();

afterAll(() => app.close());

describe('Tests with supertest on a running server', async () => {
  await app.ready();

  test('Should receive application/octet-stream', async () => {
    const res = await supertest(app.server).get('/get-file');

    expect(res.headers).toHaveProperty('content-type');
    expect(res.headers['content-type']).toEqual('application/octet-stream');
  });
});

describe('Tests with built-in inject', () => {
  test('Should receive application/octet-stream', async () => {
    const res = await app.inject({
      method: 'GET',
      url: '/get-file',
    });

    expect(res.headers).toHaveProperty('content-type');
    expect(res.headers['content-type']).toEqual('application/octet-stream');
  });
});
