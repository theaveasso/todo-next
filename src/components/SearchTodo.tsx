import { useRouter } from "next/navigation"
import { useState } from "react"

export function SearchTodo() {
  const [searchQ, setSearchQ] = useState("")
  const router = useRouter()

  return (
    <div>
      <form className="flex gap-2" onSubmit={(e) => {
        e.preventDefault()

        const encodeSearchQ = encodeURI(searchQ)
        router.push(`/search?q=${searchQ}`)
      }}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search ..."
          type="text" name="search" id="search"
          onChange={(e) => { setSearchQ(e.target.value) }}
          value={searchQ}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Search</button>
      </form>
    </div>
  )
}
