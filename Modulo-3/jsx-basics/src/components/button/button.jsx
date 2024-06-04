

export const Button = ({funcionSeteadoraEstado, valorActual}) => {
  return (
    <button onClick={() => {
        funcionSeteadoraEstado((valorActualEstado) => valorActualEstado = !useState )
    }} >
         el valor es {valorActual}
    </button>
  )
}

