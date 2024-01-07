import { useState } from "react";
import { AddTodo } from "./Components/AddTodo";
import { ShowTodo } from "./Components/ShowTodo";
import { TodoModel } from "./TodoModel.model";
import Todos from "./Components/Todos";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoItems = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), item: text }]);
  };

  const deleteTodos = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full min-h-[100vh] bg-[#3e3e3e] text-[#fefefe]">
      <Todos />
      <AddTodo addItem={addTodoItems} />
      <ShowTodo items={todos} deleteItem={deleteTodos} />
    </div>
  );
};
