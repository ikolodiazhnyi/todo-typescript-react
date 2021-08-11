import React from "react";
import { TodoListItem } from "./todoListItem";
import { RemoveTodo, Todo, ToggleTodo } from "./types";

interface TodoListProps {

  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  filteredTodos: Array<Todo>;
}

export const TodoList: React.FC<TodoListProps> = ({
  toggleTodo,
  removeTodo,
  filteredTodos,
}: TodoListProps) => {
  return (
    <ul>
      {filteredTodos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
};
