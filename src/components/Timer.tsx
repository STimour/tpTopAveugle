import "../App.css"

type AleatTimer = {
    numberAleat: number
}


const Timer = (props: AleatTimer) => {
    const {numberAleat} = props

    return (
        <div className="timer">
            <p>
               Estimez : {numberAleat}
            </p>
        </div>
    )


}

export default Timer