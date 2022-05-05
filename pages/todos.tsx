import type { NextPage } from "next";
import Link from "next/link";
import { useTodoStore } from "../src/states";

const Todos: NextPage = () => {
  const { todos, removeTodo } = useTodoStore();

  return (
    <div>
      <main>
        <h1>Todo App</h1>

        <Link href={"/"}>
          <a style={{ margin: 8, color: "blue" }}>/</a>
        </Link>

        {todos.map((todo) => {
          const handleClick = () => {
            removeTodo({ id: todo.id });
          };
          return (
            <div
              key={todo.id}
              style={{
                margin: 8,
                border: "1px solid #000",
                borderRadius: 8,
                paddingLeft: 12,
                paddingRight: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>
                {todo.title}: {todo.description}
              </p>
              <div
                onClick={handleClick}
                style={{ color: "red", cursor: "pointer" }}
              >
                <p>Delete</p>
              </div>
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

export default Todos;
