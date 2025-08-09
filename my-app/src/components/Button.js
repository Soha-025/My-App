export default function Button({ text }) {
  return (
    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
      {text}
    </button>
  );
}
