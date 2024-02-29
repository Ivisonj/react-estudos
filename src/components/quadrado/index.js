import './style.css' 

const Quadrado = ({nome, genero, idade, cm}) => {
    return (
        <div className="quadrado">
            <p>{`Nome: ${nome}`}</p>
            <p>{`Gênero: ${genero}`}</p>
            <p>{`Idade: ${idade}`}</p>
            <p>{`Cm: ${cm}`}</p>
        </div>
    )
}

export default Quadrado