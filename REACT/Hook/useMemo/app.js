const { useState, useMemo } = React;

function calcularFatorial(n) {
  console.log("Calculando fatorial de", n);
  if (n <= 1) return 1;
  return n * calcularFatorial(n - 1);
}

const App = () => {
  const [numero, setNumero] = useState(1);
  const [texto, setTexto] = useState("");

  // useMemo só recalcula o fatorial quando 'numero' muda
  const fatorial = useMemo(() => calcularFatorial(numero), [numero]);

  return (
    <div>
      <h1>Exemplo de useMemo</h1>
      <p>
        <label>
          Número:&nbsp;
          <input
            type="number"
            value={numero}
            min="0"
            onChange={e => setNumero(Number(e.target.value))}
          />
        </label>
      </p>
      <p>Fatorial: {fatorial}</p>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite algo (não recalcula o fatorial)"
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);