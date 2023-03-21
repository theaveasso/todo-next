
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const searchRouter = createTRPCRouter({
  getQ: publicProcedure
    .input(z.string().nullable())
    .query(async ({ ctx, input }) => {
      const todos = await ctx.prisma.todo.findMany({
        where: {
          todo: {
            contains: input,
            mode: "insensitive"
          }
        }
      });
      return todos.map(({ id, todo, isCompleted }) => ({ id, todo, isCompleted }));
    }),
})
