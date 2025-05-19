const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

const ListaNomes = () => {
  return (
    <div>
      <h2>Lista de Nomes:</h2>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<ListaNomes />);