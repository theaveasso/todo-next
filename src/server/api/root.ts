import { createTRPCRouter } from "./trpc";
import { todoRouter } from "./routers/todo";
import { searchRouter } from "./routers/search";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  todo: todoRouter,
  search: searchRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
