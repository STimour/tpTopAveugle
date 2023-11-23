import { useState } from "react"
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

            <h1>
               Estimez : {numberAleat}
               Vous avez clické à {userClickTimeAsNumber}
               Il fallait clicker à {timeToWin}
            </h1> 

        </div>
    )


}

export default Timer