

export const Array = () => {
    const objetos = [
        
            { id: 1, aparato: "coche"},
             { id: 2, aparato: "moto"},
            { id: 3, aparato: "avion"},
        
      ]
    return (
    <div>
        <ul>
      {objetos.map((objeto) => (
        <li key={objeto.id}>{objeto.aparato}</li>
        ))}
        </ul>
    </div>
  )
}
