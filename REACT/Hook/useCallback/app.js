const { useState, useCallback } = React;

const Botao = React.memo(({ onClick, children }) => {
  console.log("Renderizou Botao:", children);
  return <button onClick={onClick}>{children}</button>;
});

const App = () => {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  // useCallback memoriza a função para não recriar em cada render
  const incrementar = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>Exemplo de useCallback</h1>
      <p>Contador: {contador}</p>
      <Botao onClick={incrementar}>Incrementar</Botao>
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