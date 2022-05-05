import type { NextPage } from "next";
import Link from "next/link";
import { useTodoStore } from "../src/states";

const Home: NextPage = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div>
      <main>
        <h1>Todo App</h1>

        <Link href={"/todos"}>
          <a style={{ margin: 8, color: "blue" }}>/todos</a>
        </Link>

        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                margin: 8,
                borderBottom: "1px solid #000",
                paddingLeft: 8,
              }}
            >
              <p>
                {todo.id}: {todo.title}: {todo.description}
              </p>
            </div>
          );
        })}
      </main>

      <footer>
        <p>2022 sample</p>
      </footer>
    </div>
  );
};

export default Home;
