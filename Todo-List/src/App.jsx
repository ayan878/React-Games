import { useReducer } from "react";
import { Trash, CircleCheck } from "lucide-react";

const initialState = {
  title: "",
  description: "",
  todos: [],
  completedTodos: [],
  showTodo: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_TODO":
      if (state.title && state.description) {
        return {
          ...state,
          todos: [
            ...state.todos,
            { title: state.title, description: state.description },
          ],
          title: "",
          description: "",
        };
      }
      return state;
    case "COMPLETE_TODO":
      const newTodos = state.todos.filter((_, i) => i !== action.payload);
      const completedTodo = state.todos.find((_, i) => i === action.payload);
      return {
        ...state,
        todos: newTodos,
        completedTodos: [...state.completedTodos, completedTodo],
      };
    case "UNCOMPLETE_TODO":
      const newCompletedTodos = state.completedTodos.filter(
        (_, i) => i !== action.payload
      );
      const uncompletedTodo = state.completedTodos.find(
        (_, i) => i === action.payload
      );
      return {
        ...state,
        completedTodos: newCompletedTodos,
        todos: [...state.todos, uncompletedTodo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    case "DELETE_COMPLETED_TODO":
      return {
        ...state,
        completedTodos: state.completedTodos.filter(
          (_, i) => i !== action.payload
        ),
      };
    case "SHOW_TODO":
      return { ...state, showTodo: true };
    case "SHOW_COMPLETED":
      return { ...state, showTodo: false };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO" });
  };

  const handleComplete = (index) => {
    dispatch({ type: "COMPLETE_TODO", payload: index });
  };

  const handleUncomplete = (index) => {
    dispatch({ type: "UNCOMPLETE_TODO", payload: index });
  };

  const handleDelete = (index, isCompleted) => {
    if (isCompleted) {
      dispatch({ type: "DELETE_COMPLETED_TODO", payload: index });
    } else {
      dispatch({ type: "DELETE_TODO", payload: index });
    }
  };

  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col items-center">
      <h1 className="text-3xl text-white font-bold p-8 flex justify-center items-center">
        My Todos
      </h1>
      <div className="bg-zinc-800 gap-4 p-6 md:h-44 w-fit">
        <div className="flex flex-col gap-4 border-b items-center border-gray-600 pb-4 sm:w-auto sm:flex-row sm:items-start">
          <div>
            <h3 className="text-white font-semibold">Title:</h3>
            <input
              value={state.title}
              onChange={(e) =>
                dispatch({ type: "SET_TITLE", payload: e.target.value })
              }
              className="w-72 p-2 placeholder-gray-400"
              placeholder="What's the title of your To Do"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">Description:</h3>
            <input
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
              }
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
        <div className="mt-4 flex gap-2">
          <button
            className={`p-2 text-white font-semibold ${
              state.showTodo ? "bg-green-700" : "bg-zinc-600"
            }`}
            onClick={() => dispatch({ type: "SHOW_TODO" })}
          >
            To Do
          </button>
          <button
            className={`p-2 text-white font-semibold ${
              !state.showTodo ? "bg-green-700" : "bg-zinc-600"
            }`}
            onClick={() => dispatch({ type: "SHOW_COMPLETED" })}
          >
            Completed
          </button>
        </div>
      </div>
      {state.showTodo ? (
        <TodoList
          todos={state.todos}
          handleComplete={handleComplete}
          handleDelete={(index) => handleDelete(index, false)}
        />
      ) : (
        <TodoListCompleted
          todos={state.completedTodos}
          handleUncomplete={handleUncomplete}
          handleDelete={(index) => handleDelete(index, true)}
        />
      )}
    </div>
  );
}

function TodoList({ todos, handleComplete, handleDelete }) {
  return (
    <ul className="w-full max-w-md mt-6 shadow-lg">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-zinc-800 p-4 mb-4 rounded flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold text-white">{todo.title}</h1>
            <h2 className="text-lg text-gray-400">{todo.description}</h2>
          </div>
          <div className="flex gap-2">
            <Trash
              className="text-red-500 cursor-pointer"
              onClick={() => handleDelete(index, false)}
            />
            <CircleCheck
              className="text-green-500 cursor-pointer"
              onClick={() => handleComplete(index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

function TodoListCompleted({ todos, handleUncomplete, handleDelete }) {
  return (
    <ul className="w-full max-w-md mt-6">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-zinc-800 p-4 mb-4 rounded flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold text-white">{todo.title}</h1>
            <h2 className="text-lg text-gray-400">{todo.description}</h2>
          </div>
          <div className="flex gap-2">
            <Trash
              className="text-red-500 cursor-pointer"
              onClick={() => handleDelete(index, true)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default App;
