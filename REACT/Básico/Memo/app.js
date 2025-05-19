const Contador = React.memo(({ valor }) => {
  console.log("Renderizou Contador");
  return <h2>Valor: {valor}</h2>;
});

const App = () => {
  const [contador, setContador] = React.useState(0);
  const [texto, setTexto] = React.useState("");

  return (
    <div>
      <h1>Exemplo de React.memo</h1>
      <Contador valor={contador} />
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <br />
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite algo"
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);