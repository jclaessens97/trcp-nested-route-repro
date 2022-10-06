import type { AppRouter } from '../../server/src/router'; // TODO: is there a better way?
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

export function useTRPC() {
  return { trpc };
}
