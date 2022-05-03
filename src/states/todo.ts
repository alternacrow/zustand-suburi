import create from "zustand";
import { v4 as uuid } from "uuid";
import { Todo } from "../interfaces";

type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: [
    {
      id: "todo1",
      title: "title1",
      description: "description1",
      isDone: false,
    },
    {
      id: "todo2",
      title: "title2",
      description: "description2",
      isDone: false,
    },
    {
      id: "todo3",
      title: "title3",
      description: "description3",
      isDone: false,
    },
  ],
};

type Manipulator = {
  addTodo: (params: Pick<Todo, "title" | "description">) => void;
  removeTodo: (params: Pick<Todo, "id">) => void;
  editTodo: (params: Pick<Todo, "id" | "title" | "description">) => void;
  toggleDone: (params: Pick<Todo, "id">) => void;
};

type Store = State & Manipulator;

export const useTodoStore = create<Store>((set) => ({
  ...initialState,
  addTodo: ({ title, description }) => {
    set((state) => {
      const newTodo: Todo = {
        id: uuid(),
        title: title,
        description: description,
        isDone: false,
      };

      const todos: Todo[] = [...state.todos, newTodo];

      return {
        todos,
      };
    });
  },
  removeTodo: ({ id }) => {
    set((state) => {
      const todos: Todo[] = state.todos.filter((todo) => todo.id !== id);

      return {
        todos,
      };
    });
  },
  editTodo: ({ id, title, description }) => {
    set((state) => {
      const todos: Todo[] = state.todos.map((todo) => {
        if (todo.id !== id) return todo;

        const edited: Todo = {
          ...todo,
          title,
          description,
        };

        return edited;
      });

      return {
        todos,
      };
    });
  },
  toggleDone: ({ id }) => {
    set((state) => {
      const todos: Todo[] = state.todos.map((todo) => {
        if (todo.id !== id) return todo;

        const toggled: Todo = {
          ...todo,
          isDone: !todo.isDone,
        };

        return toggled;
      });

      return {
        todos,
      };
    });
  },
}));
