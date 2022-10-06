import path from 'path';
import fastify from 'fastify';
import { fastifyAutoload } from '@fastify/autoload';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';
import { createContext } from './context';

const app = fastify({
  logger: true,
  maxParamLength: 5000, // to allow tRPC batch requests
});

app.register(fastifyAutoload, {
  dir: path.join(__dirname, 'plugins'),
});

app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router: appRouter,
    context: createContext,
  },
});

export default app;
