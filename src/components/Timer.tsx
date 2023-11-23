import { useState } from "react"
import "../App.css"


const Timer = () =>{
    const [timerAl, setTimerAl] = useState(Number)
    const [secondes, setSecondes] = useState(new Date())
    const [userClickTime, setUserClickTime] = useState(new Date())

    let msg = ""

    const secondesAsNumber = secondes.getTime();
    
    const handelClickStart = () =>{
        setTimerAl(Math.floor(Math.random() * (20 - 5)) + 5)
        const tempsClicked = new Date()
        setSecondes(tempsClicked)
        
    }
    
    const handelClickGame = () =>{

        const tempsClicked = new Date()
        setUserClickTime(tempsClicked)
    }
    
    
    const valueVerif = timerAl + secondesAsNumber
    const valueUser = userClickTime.getTime()

    if( valueVerif === valueUser){
        msg = "Bravo!"
    }

    return (
        <div className="timer">

            <h1>
                <button>Start</button>
                {timerAl} <br />
                {secondes.toLocaleTimeString()}
                {msg}
            </h1> 

        </div>
    )


}

export default Timer