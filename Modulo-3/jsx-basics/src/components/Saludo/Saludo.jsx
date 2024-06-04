
import "./Saludo.css";

 export const Saludo = () => {
    const horaActual = new Date().getHours();

    let mensaje;
    if (horaActual >= 6 && horaActual < 12) {
      mensaje = 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 20) {
      mensaje = 'Buenas tardes';
    } else {
      mensaje = 'Buenas noches';
    }
  
    return <h1>{mensaje}</h1>;
    
  return (
    <div>
       Saludo();
    </div>
  )
}

