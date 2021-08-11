export type Todo = {
  text: string;
  complete: boolean;
  id: string;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;

export type RemoveTodo = (id: string) => void;

export type SetStatus = React.Dispatch<React.SetStateAction<string>>;
