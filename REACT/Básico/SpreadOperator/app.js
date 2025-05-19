const Saudacao = ({ nome, mensagem }) => {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>{mensagem}</p>
    </div>
  );
};

const props = {
  nome: "Artur",
  mensagem: "Spread Operator facilita o envio de props!"
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Saudacao {...props} />);