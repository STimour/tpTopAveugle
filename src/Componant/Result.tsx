const Display = () => {
    return (
        <div className="affichage">
            <p>Objectif : {numberAleat}</p>
            <p>Resultat : {timeToWin}</p>
        </div>
    );
};

export default Display;