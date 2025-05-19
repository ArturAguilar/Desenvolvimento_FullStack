const Mensagem = ({ logado }) => {
  if (logado) {
    return <h2>Bem-vindo de volta!</h2>;
  } else {
    return <h2>Por favor, faça login.</h2>;
  }
};

const App = () => {
  const usuarioLogado = false; // Altere para true para testar

  return (
    <div>
      <h1>Conditional Rendering em React</h1>
      <Mensagem logado={usuarioLogado} />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);