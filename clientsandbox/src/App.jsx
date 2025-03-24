import React from 'react'
import {Client} from "@stomp/stompjs"
import GreetingsApp from "./pages/GreetingsApp.jsx";
import Chat from "./pages/Chat.jsx";



function App() {

    const [page, setPage] = React.useState("chat")

    return (
        <>
            {page === "chat" ?
            (<div>
                <button className={"btn btn-secondary disabled"}>CHAT</button>
                <button className={"btn btn-primary"} onClick={() => setPage("greetings")}>GREETINGS</button>

                <div className={"d-flex justify-content-center m-5"}>
                    <Chat/>
                </div>
            </div>
            ) : (
            <div>
                <button className={"btn btn-primary"} onClick={() => setPage("chat")}>CHAT</button>
                <button className={"btn btn-secondary disabled"}>GREETINGS</button>
                <GreetingsApp/>
            </div>)
            }
        </>
    )
}

export default App
