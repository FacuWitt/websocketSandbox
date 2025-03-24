import React from "react";
import ChatHeader from "../components/chat/ChatHeaderProfile.jsx";
import Message from "../components/chat/Message.jsx";
import {Client} from "@stomp/stompjs";
import ChatHeaderProfile from "../components/chat/ChatHeaderProfile.jsx";


const client = new Client({
    brokerURL: 'ws://localhost:8080/ws',
    connectHeaders: {
        username: "name"
    }
})

client.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};


function sendMessage(message) {
    // console.log(JSON.stringify({content: message, sender: "Facu Witt"}))
    console.log(JSON.stringify(message))


    client.publish({
        destination: "/app/chat",
        // body: JSON.stringify({content: message, sender:"Facu Witt"})
        body: JSON.stringify(message)
    })
}

client.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};






function Chat() {

    // Message structure example: {"content":"Hola","isReceived":true}
    const [messages, setMessages] = React.useState([])
    const [inputMessage, setInputMessage] = React.useState("")
    const [online, setOnline] = React.useState(false)
    const [myName, setMyName] = React.useState("")
    const [inputName, setInputName] = React.useState("")

    React.useEffect(() => {
        client.onConnect = () => {
            client.subscribe("/topic/chat_channel", (message) => {
                console.log("Received message: ", JSON.parse(message.body).content, JSON.parse(message.body).sender)
                messages.push({content:JSON.parse(message.body).content, sender:JSON.parse(message.body).sender})
                setMessages([...messages])
            })
        }
    }, [])

    React.useEffect(() => {
        if (online) {
            console.log("Activando WebSocket...");
            client.activate();
        } else {
            console.log("Desactivando WebSocket...");
            client.deactivate();
        }
    }, [online]); // Se ejecuta cuando cambia el estado de `online`







    return (
        <>
            {(myName === "") ? (
            <div className={"text-white"}>

                <form onSubmit={()=> setMyName(inputName)}>
                    <input type={"text"} onChange={(e) => setInputName(e.target.value)}/>
                </form>

            </div>

            ) : (

            <div className={"d-flex flex-column container toast bg-black bg-opacity-10"} style={{height: "80vh"}}>
                <div>
                    <ChatHeaderProfile nameuser={"Chat grupal libre"}
                                       img={"data:image/jpeg;base64,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"}></ChatHeaderProfile>
                </div>

                <div className={'form-control bg-secondary border-0 p-3 shadow-sm h-100'}>
                    {messages.map((message, index) => (
                        <Message key={index}
                                 textMessage={message.content}
                                 sender={message.sender}
                                 isReceived={message.sender !== myName}/>
                    ))}
                </div>

                <div className={"px-4 py-1"}>
                    <form className={"input-group"}  onSubmit={(e) => e.preventDefault()}>
                        <input type={"text"} className={"form-control border-0 rounded mx-3"}
                               placeholder={"Type a message"}
                               onChange={(e) => setInputMessage(e.target.value)}
                               value={inputMessage}
                        />
                        <div className={"input-group-append"}>
                            <button type={"submit"} className={"btn btn-primary "} onClick={() => {sendMessage({"content":inputMessage, "sender":myName}); setInputMessage("")}}>Send
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    {online ?
                        <button className={"btn btn-success"} onClick={() => setOnline(false)}>OnLine</button> :
                        <button className={"btn btn-danger"} onClick={() => setOnline(true)}>Offline</button>}
                </div>
            </div>
            )}


        </>
    )
}

export default Chat