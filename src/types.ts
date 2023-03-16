import type { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import type { AppRouter } from "./server/api/root";

type RouterOutput = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutput["todo"]["getAll"];

export type TodoOutput = allTodosOutput[number];

export const todoInput = z
  .string({
    required_error: "What do you want to do?",
  })
  .min(3)
  .max(50);
