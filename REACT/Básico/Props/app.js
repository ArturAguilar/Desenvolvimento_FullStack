// Componente Saudacao recebe props
const Saudacao = (props) => {
  return <h1>Olá, {props.nome}!</h1>;
};

// Componente principal usando Saudacao com diferentes props
const App = () => {
  return (
    <div>
      <Saudacao nome="Artur" />
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
      <p>Exemplo de uso de props em React!</p>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);