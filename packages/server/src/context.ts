import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export type Context = inferAsyncReturnType<typeof createContext>;

export function createContext({ req, res }: CreateFastifyContextOptions) {
  return {
    req,
    res,
  };
}

