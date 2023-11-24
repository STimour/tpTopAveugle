type Resultat = {
    numberAleat: number,
    timeToWin: number
}

const Display = (props: Resultat) => {
    const {numberAleat, timeToWin} = props
          
    return (
        <div className="affichage">
            <p>Objectif : {numberAleat}</p>
            <p>Resultat : {timeToWin}</p>
        </div>
    );
};

export default Display;