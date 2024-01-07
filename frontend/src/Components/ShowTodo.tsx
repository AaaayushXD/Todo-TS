import { TodoModel } from "../TodoModel.model";

interface TodoListProps {
  items: { id: string; item: string }[];
  deleteItem: (id: string) => void;
}

export const ShowTodo: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <h3 className="text-xl text-[#39b2ad] px-4 py-2">Todo Items:</h3>
      <ul className="w-full h-full px-4 py-2 flex flex-col items-center gap-6 ">
        {props.items.map((todo: TodoModel) => (
          <div
            key={todo.id}
            className="w-full h-full flex gap-6 items-center bg-[#2727278a] px-5 py-4 justify-between rounded-sm"
          >
            <li className=" text-lg">{todo.item}</li>
            <button
              onClick={props.deleteItem.bind(null, todo.id)}
              type="button"
              className="bg-[#e13b3bcd] px-3 py-2 rounded-sm hover:bg-[#e13b3b]"
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};
