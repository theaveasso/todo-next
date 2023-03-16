import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { todoInput } from "../../../types";

export const todoRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany();
    return todos.map(({ id, todo, isCompleted }) => ({ id, todo, isCompleted }));
  }),
  create: publicProcedure.input(todoInput).mutation(({ ctx, input }) => {
    // throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    return ctx.prisma.todo.create({
      data: {
        todo: input,
      },
    });
  }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.todo.delete({
      where: {
        id: input,
      },
    });
  }),
  toggle: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isCompleted: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { id, isCompleted } = input;
      return ctx.prisma.todo.update({
        where: {
          id,
        },
        data: {
          isCompleted,
        },
      });
    }),
});
