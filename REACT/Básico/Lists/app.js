const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

const ListaFrutas = () => (
  <ul>
    {frutas.map((fruta, index) => (
      <li key={index}>{fruta}</li>
    ))}
  </ul>
);

const App = () => (
  <div>
    <h1>Lista de Frutas</h1>
    <ListaFrutas />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);