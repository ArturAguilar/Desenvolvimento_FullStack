const Ternario = ({ logado }) => {
  return (
    <div>
      {logado ? <h1>Bem-vindo, usuário!</h1> : <h1>Por favor, faça login.</h1>}
    </div>
  );
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
// Altere o valor de logado para true ou false para testar
root.render(<Ternario logado={true} />);