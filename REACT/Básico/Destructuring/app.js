const Saudacao = ({ nome, mensagem }) => {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>{mensagem}</p>
    </div>
  );
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Saudacao nome="Artur" mensagem="Você está aprendendo destructuring em React!" />);