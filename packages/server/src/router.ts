import { t } from './trpc';

import { equipmentRouter } from './router/equipment';

export const appRouter = t.router({
  equipment: equipmentRouter,
});

export type AppRouter = typeof appRouter;
