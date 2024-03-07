import './App.css'
import { useState, useEffect } from 'react'
import Quadrado from './components/quadrado'
import Button from './components/button'

const dados = [
  {
    nome: 'Felipe',
    genero: 'Não binare', 
    idade: '31', 
    cm: '30'
  }
]

function App() {
  const [ number, setNumber ] = useState(0)

  const mais = () => {
    setNumber(number + 1)
  }

  const menos = () => {
    if(number > 0) {
      setNumber(number - 1)
    }
  }

  const [ contador, setContador ] = useState(0)

  useEffect(() => {
    console.log(`Felipe Clicou ${contador} vezes`)
  }, [contador])
  
  return (
    <div className="app">
      <p>Voce clicou {contador} vezes</p>
      <Quadrado 
        nome={dados[0].nome}
        genero={dados[0].genero}
        idade={dados[0].idade}
        cm={number}
      />
      <div>
        <Button bg='purple' cursor='pointer' onClick={menos}>
          -
        </Button>
        <Button bg='yellow'cursor='pointer' onClick={mais}>
          +
        </Button>
      </div>
      <Button bg='green' cursor='pointer' onClick={() => setContador(contador + 1)}>
        Click
      </Button>
    </div>
  )
}

export default App;
