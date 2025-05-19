const { useState, useEffect } = React;

// Hook personalizado useFetch
function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setCarregando(true);
    setErro(null);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar dados");
        return res.json();
      })
      .then((json) => setDados(json))
      .catch((err) => setErro(err.message))
      .finally(() => setCarregando(false));
  }, [url]);

  return { dados, carregando, erro };
}

const App = () => {
  const { dados, carregando, erro } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1>Exemplo de useFetch</h1>
      {carregando && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}
      {dados && (
        <ul>
          {dados.map((usuario) => (
            <li key={usuario.id}>{usuario.name} ({usuario.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);