function App() {
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
              className="w-72 p-2 placeholder-gray-400"
              placeholder="What's the title of your To Do"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">Description:</h3>
            <input
              className="w-72 p-2 placeholder-gray-400"
              placeholder="What's the description of your To Do"
            />
          </div>
          <button className="font-bold text-white bg-green-700 w-full md:w-16 h-10 md:mt-6 mt-4">
            Add
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-green-700 p-2 text-white font-semibold">
            To Do
          </button>
          <button className="bg-zinc-600 p-2 text-white font-semibold">
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
