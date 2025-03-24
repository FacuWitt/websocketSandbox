import React from "react";

const Message = ({textMessage, sender, isReceived}) => {
    return (
        <div className={isReceived ?  "d-flex justify-content-start" : "d-flex justify-content-end"}>
            <div className={isReceived ? " bg-primary-subtle d-inline-block rounded py-1 px-2 mx-2 my-1 shadow" : "d-inline-block bg-body-tertiary rounded py-1 px-2 mx-2 my-1 shadow"}>
                <div style={{fontSize: "10px"}} className={"text-secondary"}>{sender}</div>
                <div className={"p-0"}>{textMessage}</div>

            </div>
        </div>
    );
}

export default Message;