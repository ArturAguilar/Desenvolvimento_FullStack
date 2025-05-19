const { useRef } = React;

const FocoInput = () => {
  const inputRef = useRef(null);

  const focarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Clique no botão para focar" />
      <button onClick={focarInput}>Focar no input</button>
    </div>
  );
};

const App = () => (
  <div>
    <h1>Exemplo de useRef</h1>
    <FocoInput />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);