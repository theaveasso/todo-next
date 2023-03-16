import { api } from "../utils/api";
import { Todo } from "./Todo";
import type { TodoOutput } from "../types";

type TodoProps = {
  id: string,
  todo: string,
  isCompleted: boolean,
}

export function Todos() {
  const { data: todos, isLoading, isError } = api.todo.getAll.useQuery();

  if (isLoading) return <div>Loading todos 🔄</div>
  if (isError) return <div>Something went wrong ❌</div>

  return (
    <>
      {todos ?
        todos.map((todo: TodoProps) => {
          return <Todo key={todo.id} todoItem={todo} />
        })
        : "Create your first todo..."}
    </>
  )
}
