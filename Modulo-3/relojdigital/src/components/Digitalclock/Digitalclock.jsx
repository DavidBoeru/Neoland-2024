import { useEffect, useState } from "react"
import "./Digitalclock.css"


export const Digitalclock = () => {


    const [clockState, setClockState] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="digital-clock">
            <h2>{clockState}</h2>
        </div>
    );
};