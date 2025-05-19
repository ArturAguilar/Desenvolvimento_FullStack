const Hello = () => {
  return <h1>Hello World com Arrow Function!</h1>;
};

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);