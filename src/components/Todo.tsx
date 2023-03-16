import toast from "react-hot-toast";
import type { TodoOutput } from "../types";
import { api } from "../utils/api";

type TodoProps = {
  todo: TodoOutput
}

export function Todo({ todoItem }: TodoProps) {
  const { id, todo, isCompleted } = todoItem

  const trpc = api.useContext();

  const { mutate: doneMutation } = api.todo.toggle.useMutation({
    onMutate: async ({ id, isCompleted }) => {

      // Cancel any outgoing refetches so they don't overwrite our optimistic update
      await trpc.todo.getAll.cancel()

      // Snapshot the previous value
      const previousTodos = trpc.todo.getAll.getData()

      // Optimistically update to the new value
      trpc.todo.getAll.setData(undefined, (prev) => {
        if (!prev) return previousTodos
        return prev.map(t => {
          if (t.id === id) {
            return ({
              ...t,
              isCompleted
            })
          }
          return t
        })
      })

      // Return a context object with the snapshotted value
      return { previousTodos }
    },

    onSuccess: (err, { isCompleted }) => {
      if (isCompleted) {
        toast.success("Todo completed 🎉")
      }
    },

    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, done, context) => {
      toast.error(`An error occured when marking todo as ${done ? "done" : "undone"}`)
      if (!context) return
      trpc.todo.getAll.setData(undefined, () => context.previousTodos)
    },
    // Always refetch after error or success:
    onSettled: async () => {
      await trpc.todo.getAll.invalidate()
    },
  });

  const { mutate: deleteMutation } = api.todo.delete.useMutation({
    onMutate: async (deleteId) => {

      // Cancel any outgoing refetches so they don't overwrite our optimistic update
      await trpc.todo.getAll.cancel()

      // Snapshot the previous value
      const previousTodos = trpc.todo.getAll.getData()

      // Optimistically update to the new value
      trpc.todo.getAll.setData(undefined, (prev) => {
        if (!prev) return previousTodos
        return prev.filter(t => t.id !== deleteId)
      })

      // Return a context object with the snapshotted value
      return { previousTodos }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      toast.error(`An error occured when deleting todo`)
      if (!context) return
      trpc.todo.getAll.setData(undefined, () => context.previousTodos)
    },
    // Always refetch after error or success:
    onSettled: async () => {
      await trpc.todo.getAll.invalidate()
    },
  });

  return (
    <div
      className="flex gap-2 items-center justify-between"
    >
      <div className="flex gap-2 items-center">
        <input
          className="cursor-pointer w-4 h-4 border border-gray-300  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          type="checkbox" name="done" id={id} checked={isCompleted}
          onChange={(e) => {
            doneMutation({ id, isCompleted: e.target.checked });
          }}
        />
        <label htmlFor={id} className={`cursor-pointer ${isCompleted ? "line-through" : ""}`}>
          {todo}
        </label>
      </div>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={() => {
          deleteMutation(id)
        }}
      >X</button>
    </div>
  )
}
