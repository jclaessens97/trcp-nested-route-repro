import { t } from '@/trpc';

export const equipmentRouter = t.router({
  list: t.procedure.query(() => {
    return ['Hello world!'];
  }),
});
