type Resultat = {
    winNumber: number
}

const Display = (props: Resultat) => {
    const {winNumber} = props
    return (
        <div className="affichage">
            <p>Resultat : {winNumber}</p>
        </div>
    );
};

export default Display;