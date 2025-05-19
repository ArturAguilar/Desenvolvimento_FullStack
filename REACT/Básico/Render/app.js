const Mensagem = () => {
  return <h1>Este componente foi renderizado!</h1>;
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Mensagem />);