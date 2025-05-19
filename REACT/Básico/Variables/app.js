const Hello = () => {
  const nome = "Artur";
  const saudacao = "Bem-vindo ao React!";
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>{saudacao}</p>
    </div>
  );
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);