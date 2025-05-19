const Botao = () => {
  const handleClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  );
};

const App = () => (
  <div>
    <h1>Exemplo de Evento em React</h1>
    <Botao />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);