import React from 'react'
import {Client} from "@stomp/stompjs"


// const client = new Client({
//     brokerURL: 'ws://localhost:8080/ws'
// })


const client = new Client({
    brokerURL: 'ws://localhost:8080/ws'
})



// client.onConnect = (frame) => {
//     console.log("Connected to the broker " + frame)
//     client.subscribe("/topic/greetings", (message) => {
//         console.log("Received message: ", message.body)
//     })
// }

client.onWebSocketError = (error) => {

    console.error('Error with websocket', error);

};


function sendMessage(message) {
    console.log(JSON.stringify({content: message}))
    client.publish({
        destination: "/app/hello",
        body: JSON.stringify({content: message})
    })
}


client.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};



function GreetingsApp() {
    const [connected, setConnected] = React.useState(false)
    const [inputName, setInputName] = React.useState("")
    const [inputMessage, setInputMessage] = React.useState("")


    React.useEffect(() => {
        client.onConnect = () => {
            // console.log("Connected to the broker channel")
            client.subscribe("/topic/greetings", (message) => {
                // console.log("Received message: ", JSON.parse(message.body).content)
                setInputMessage(JSON.parse(message.body).content)
            })
        }
    }, [])

    React.useEffect(() => {
        if (connected) {
            client.activate()
        } else {
            client.deactivate()
        }
    }, [connected])





    return (
        <>
            <div className={"d-flex justify-content-center flex-column w-50 m-auto"}>
                <h1 className={"text-center text-white"}>Escribe tu nombre!</h1>
                <div className={"d-flex my-3"}>
                    <input onChange={(e) => setInputName(e.target.value)} className={"form-control"}></input>

                    <button className={"btn btn-primary mx-2"} onClick={() => {
                        sendMessage(inputName)
                    }}>Send
                    </button>
                </div>


                <h2 className={"text-white"}>El server dice: </h2>
                <h4 className={"text-bg-success p-3 shadow"}> {inputMessage}</h4>


                {connected ?
                    <div>
                        <button className={"btn btn-success"} onClick={()=>{ setConnected(false); console.log("ahora 'desconectado'")}}>Conectado</button>
                    </div>

                    :
                    <div>
                        <button className={"btn btn-danger"} onClick={()=> {setConnected(true); console.log("Ahora 'conectado'")}}>
                            Desconectado
                        </button>
                    </div>
                }

            </div>
        </>
    )
}

export default GreetingsApp