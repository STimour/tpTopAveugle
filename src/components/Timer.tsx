import { useState } from "react"
import "../App.css"


const Timer = () =>{

    const timer = Math.floor(Math.random() * (20 - 5)) + 5;
    const [secondes, setSecondes] = useState(new Date())
    const [userClickTime, setUserClickTime] = useState(new Date())

    const secondesAsNumber = secondes.getTime();
    
    const handelClick = (clicked: Boolean) =>{
        
        const tempsClicked = new Date()
        setSecondes(tempsClicked)
        setUserClickTime(tempsClicked)
        
    }
    let valueVerif = timer + secondesAsNumber
    const valueUser = userClickTime.getTime()

    if( valueVerif === valueUser){
        
    }

    return (
        <div className="timer">

            <h1>
                {timer} <br />
                {secondes.toLocaleTimeString()}
            </h1> 

        </div>
    )


}

export default Timer