import "./App.css";

const lista = [
  {
    id: "clh8cwbop0000uxk43kkxcxkb",
    name: "Phantom Menace",
    year: 1999,
    sequential: "1",
    trilogy: "prequel",
  },
  {
    id: "clh8bp4ug0000uxu810uvnkjv",
    name: "Return of Jedi",
    year: 1983,
    sequential: "6",
    trilogy: "original",
  },
  {
    id: "clh8daz3c0000uxds6umu4f53",
    name: "Attack of the Clones",
    year: 2003,
    sequential: "2",
    trilogy: "prequel",
  },
  {
    id: "clhfg21ks0000uxlw5dkjedjr",
    name: "The Phantom Menace",
    year: 1999,
    sequential: "1",
    trilogy: "prequel",
  },
  {
    id: "clhibeloj0000gv1g3habhgq2",
    name: "Revenge of the Sith",
    year: 2005,
    sequential: "3",
    trilogy: "sequel",
  },
];

function App() {
  return (
    <>
      <ul className="flex gap-8">
        {lista.map((item) => (
          <li
            className="flex flex-col items-center justify-center w-40 h-32 bg-zinc-700 rounded-lg hover:bg-slate-800 cursor-pointer"
            key={item.id}
          >
            <h2 className="text-2xl">{item.name}</h2>
            <span className="italic text-gray-400">{item.year}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
