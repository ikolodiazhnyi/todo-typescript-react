import React, { ChangeEvent, FormEvent } from "react";
import { AddTodo, SetStatus } from "./types";

interface TodoFormProps {
  addTodo: AddTodo;
  setStatus: SetStatus;
}

export const TodoForm: React.FC<TodoFormProps> = ({
  addTodo,
  setStatus
}: TodoFormProps) => {
  const [newTodo, setNewTodo] = React.useState("");

  const haddleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value)
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form>
      <div>
        <select onChange={handleStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <input type="text" value={newTodo} onChange={haddleChange}></input>
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
