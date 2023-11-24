type Resultat = {
    numberAleat: number,
    timeToWin: string
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