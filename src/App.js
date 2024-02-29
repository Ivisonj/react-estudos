import './App.css';
import Quadrado from './components/quadrado';

const dados = [
  {
    nome: 'Felipe',
    genero: 'Não binare', 
    idade: '31', 
    cm: '30'
  }
]

function App() {
  return (
    <div className="app">
      <Quadrado 
        nome={dados[0].nome}
        genero={dados[0].genero}
        idade={dados[0].idade}
        cm={dados[0].cm}
      />
    </div>
  );
}

export default App;
