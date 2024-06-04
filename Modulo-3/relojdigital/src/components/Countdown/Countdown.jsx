import React, { useEffect, useState } from "react";
import "./Countdown.css";

export const Countdown = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Obtener el tiempo actual
    let now = new Date().getTime();

    // Establecer el tiempo de inicio 10 minutos (600,000 milisegundos) en el futuro
    let countDownDate = now + 600000;

    let x = setInterval(() => {
      now = new Date().getTime();
      let distance = countDownDate - now;

      // Calculando el tiempo restante en minutos y segundos
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Formateando el tiempo restante en el formato deseado
      setTime(`${minutes}m ${seconds}s`);

      // Cuando el tiempo restante llega a 0, limpiar el intervalo y mostrar "COUNTDOWN FINISHED"
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(x);
  }, []);

  return (
    <div className="countdown">
      <h2>{time}</h2>
    </div>
  );
};