const App = () => (
  <div>
    <h1 className="titulo">Estilizando React com CSS Externo</h1>
    <button className="botao">Clique aqui</button>
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);