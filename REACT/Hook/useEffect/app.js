const { useState, useEffect } = React;

const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Hora atual: {hora}</h2>
    </div>
  );
};

const App = () => (
  <div>
    <h1>Exemplo de useEffect</h1>
    <Relogio />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);