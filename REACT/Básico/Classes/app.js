class Hello extends React.Component {
  render() {
    return <h1>Hello World com Classe!</h1>;
  }
}

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);