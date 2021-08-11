import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { AddTodo, RemoveTodo, Todo, ToggleTodo } from "./types";
import { v4 as uuidv4 } from "uuid";

const initialTodos: Array<Todo> = [
  { text: "Brush teath", complete: true, id: uuidv4() },
  { text: "Have a breakfast", complete: false, id: uuidv4() },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.complete !== true));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (selectedTodo === todo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false, id: uuidv4() }]);
  };

  const removeTodo: RemoveTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoForm addTodo={addTodo} setStatus={setStatus} />
      <TodoList
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        filteredTodos={filteredTodos}
      />
    </React.Fragment>
  );
};

export default App;
