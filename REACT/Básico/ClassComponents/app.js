// Componente de classe
class Saudacao extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}!</h1>;
  }
}

// Componente principal usando o componente Saudacao
class App extends React.Component {
  render() {
    return (
      <div>
        <Saudacao nome="Artur" />
        <p>Bem-vindo ao React Class Components!</p>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);