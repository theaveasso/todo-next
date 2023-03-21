import Head from "next/head";
import { Todos } from "../components/Todos";
import { CreateTodo } from "../components/CreateTodo";
import { SearchTodo } from "../components/SearchTodo";

function Home() {
  return (
    <>
      <Head>
        <title>Full stack todo app</title>
        <meta name="description" content="Full stack todo app" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <div
              className="flex flex-col gap-4 bg-white/10 p-8 text-white"
            >
              <h3 className="text-xl font-bold text-center">Another Todos App</h3>
              <SearchTodo />
              <CreateTodo />
              <Todos />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

