export default function Player({ name, symbol }) {
  return (
    <li className="mb-4 p-2 border border-transparent hover:border-yellow-600 transition duration-300 border-4">
      <span className="mr-6">
        {name}
        <span className="ml-6">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
