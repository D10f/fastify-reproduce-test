import Fastify from 'fastify';
import route from './route';

const app = Fastify({ logger: true });

app.register(route);

export function startServer() {
  app.listen({ port: 3000 }, (err, url) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    app.log.info(`Running and listening on ${url}`);
  });

  return app;
}
