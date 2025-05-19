const Formulario = () => {
  const [nome, setNome] = React.useState("");

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Olá, ${nome}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

const App = () => (
  <div>
    <h1>Exemplo de Formulário em React</h1>
    <Formulario />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);