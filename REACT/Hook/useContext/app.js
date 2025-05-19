const { createContext, useContext } = React;

// Criação do contexto
const TemaContext = createContext();

// Componente que consome o contexto
const Titulo = () => {
  const tema = useContext(TemaContext);
  return <h1 style={{ color: tema.cor }}>Tema atual: {tema.nome}</h1>;
};

// Componente principal que fornece o contexto
const App = () => {
  const tema = { nome: "Escuro", cor: "#8e24aa" };

  return (
    <TemaContext.Provider value={tema}>
      <Titulo />
      <p>Este exemplo usa o hook useContext para acessar o tema.</p>
    </TemaContext.Provider>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);