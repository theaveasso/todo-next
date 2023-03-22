import { useSearchParams } from "next/navigation";
import { SearchTodo } from "../../components/SearchTodo";
import { Todo } from "../../components/Todo";
import { TodoProps, Todos } from "../../components/Todos";
import { api } from "../../utils/api";

function Search() {
  const search = useSearchParams()
  const searchQuery = search.get("q")

  const { data: todos, isLoading, isError } = api.search.getQ.useQuery(searchQuery)

  if (isLoading) return <div>Loading todos 🔄</div>
  if (isError) return <div>Something went wrong ❌</div>

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div
              className="flex flex-col gap-4 bg-white/10 p-8 text-white"
            >
              <h3 className="text-xl font-bold text-center">Another Todos App</h3>
              <SearchTodo />
              <>
                {todos.length ?
                  todos.map((todo: TodoProps) => {
                    return <Todo key={todo.id} todoItem={todo} />
                  })
                  : <p className="text-yellow-300">"No result. Create a new one instead!"</p>}
              </>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Search;

