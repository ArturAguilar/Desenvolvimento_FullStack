const { useReducer } = React;

// Função reducer
function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h2>Contador: {state.contador}</h2>
      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
    </div>
  );
};

const App = () => (
  <div>
    <h1>Exemplo de useReducer</h1>
    <Contador />
  </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);