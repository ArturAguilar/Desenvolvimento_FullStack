// Componente de função
const Saudacao = (props) => {
  return <h1>Olá, {props.nome}!</h1>;
};

// Componente principal usando o componente Saudacao
const App = () => {
  return (
    <div>
      <Saudacao nome="Artur" />
      <p>Bem-vindo ao React Components!</p>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);