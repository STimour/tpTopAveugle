import "../App.css"

type AleatTimer = {
    numberAleat: number
    timeToWin: number
    userClickTimeAsNumber: number
}


const Timer = (props: AleatTimer) => {
    const {numberAleat, timeToWin, userClickTimeAsNumber} = props

    return (
        <div className="timer">

            <p>
               Estimez : {numberAleat}
            </p>
            <p>
               Vous avez clické à {userClickTimeAsNumber}
            </p>
            <p>
               Il fallait clicker à {timeToWin}
            </p> 

        </div>
    )


}

export default Timer