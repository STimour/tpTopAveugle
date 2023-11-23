type Resultat = {
    winNumber: Number
}

const Display = (props: Resultat) => {
    const {winNumber} = props
    return (
        <div className="affichage">
            <p>Resultat : {winNumber.toString()}</p>
        </div>
    );
};

export default Display;