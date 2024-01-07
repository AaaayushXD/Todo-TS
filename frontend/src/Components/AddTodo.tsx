import { useState } from "react";

interface AddTodoProps {
  addItem: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [item, setItem] = useState<string>("");

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (item) {
      props.addItem(item);
      setItem("");
    } else {
      throw new Error("Invalid Input");
    }
    setItem("");
  };

  return (
    <>
      <div className="w-full h-[80px] px-5">
        <form onSubmit={submitForm} className="flex items-center gap-8">
          <div className="h-full flex gap-5 px-4 py-2 items-center">
            <label htmlFor="newTodo" className="text-sm text-[#a6a6a6]">
              Add new Item:
            </label>
            <input
              type="text"
              id="newTodo"
              onChange={(e) => setItem(e.target.value)}
              required
              value={item}
              autoComplete="off"
              className="bg-transparent  border-b-2 border-b-[#a6a6a6] px-4 text-md outline-none focus:outline-none focus:border-b-[#39b2ad]"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 bg-[#39b2ad] rounded-sm text-lg font-bold"
          >
            Add
          </button>
        </form>
      </div>
      <div className="border-2 border-[#666666] mb-8"></div>
    </>
  );
};
