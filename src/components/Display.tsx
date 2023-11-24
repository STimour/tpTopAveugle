import { useMemo } from "react";

type Resultat = {
    numberAleat: number,
    timeToWin: number | null,
    end: number | null
}

const Display = (props: Resultat) => {
    const {numberAleat, timeToWin, end} = props

    const result = useMemo(
        () => (end && timeToWin) ? Math.abs(timeToWin - end) : 0
    , [timeToWin, end])
          
    return (
        <div className="affichage">
            <p>Objectif : {numberAleat}</p>
            <p>Resultat attendu: {timeToWin}</p>
            <p>Différence: {result}</p>
        </div>
    );
};

export default Display;