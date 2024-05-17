import { useState } from "react";
import { Trash, CircleCheck } from "lucide-react";

function App() {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState(false);

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleAdd = () => {
    if (todo && desc) {
      setTodos([...todos, { title: todo, description: desc }]);
      setTodo("");
      setDesc("");
    }
  };

  const handleTodo = () => {
    setShowTodo(true);
  };

  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col items-center">
      <h1 className="text-3xl text-white font-bold p-8 flex justify-center items-center">
        My Todos
      </h1>
      <div className="bg-zinc-800 gap-4 p-6 md:h-fit w-fit">
        <div className="flex flex-col gap-4 border-b items-center border-gray-600 pb-4 sm:w-auto sm:flex-row sm:items-start">
          <div>
            <h3 className="text-white font-semibold">Title:</h3>
            <input
              value={todo}
              onChange={onChangeTodo}
              className="w-72 p-2 placeholder-gray-400"
              placeholder="What's the title of your To Do"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">Description:</h3>
            <input
              value={desc}
              onChange={onChangeDesc}
              className="w-72 p-2 placeholder-gray-400"
              placeholder="What's the description of your To Do"
            />
          </div>
          <button
            className="font-bold text-white bg-green-700 w-full md:w-16 h-10 md:mt-6 mt-4"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-700 p-2 text-white font-semibold"
            onClick={handleTodo}
          >
            To Do
          </button>
          <button className="bg-zinc-600 p-2 text-white font-semibold">
            Completed
          </button>
        </div>
        {showTodo && <TodoList todos={todos} />}
      </div>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul className="w-full max-w-md mt-6 shadow-lg">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-zinc-900 p-4 mb-4 rounded flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold text-white">{todo.title}</h1>
            <h2 className="text-lg text-gray-400">{todo.description}</h2>
          </div>
          <div className="flex gap-2">
            <Trash className="text-red-500 cursor-pointer" />
            <CircleCheck className="text-green-500 cursor-pointer" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
