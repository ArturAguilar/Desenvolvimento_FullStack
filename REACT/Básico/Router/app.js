const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

const Home = () => <h2>Página Inicial</h2>;
const Sobre = () => <h2>Sobre</h2>;
const Contato = () => <h2>Contato</h2>;

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);