import React from "react";

const ChatHeaderProfile = ({nameuser, img}) => {
    return (
        <>
            <div className={"d-flex align-content-center"}>
                <img src={img} style={{height:"50px", aspectRatio:"1", objectFit:"cover"}} alt="Profile" className={"m-2 rounded rounded-circle"} />
                <div className={"text-white col px-2 h-auto d-flex  d-flex flex-column "}>
                    <h5 className={"col d-flex align-items-end mb-0"}>{nameuser}</h5>
                    <p className={"col d-flex justify-content-start mb-0 text-info"}>Online</p>
                </div>
            </div>
        </>

        // <>
        //     <div className={"d-flex align-content-center"}>
        //         <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png" style={{height:"50px", aspectRatio:"1"}} alt="Profile" className={"m-2 rounded rounded-circle"} />
        //         <div className={"text-white col px-2 h-auto d-flex  d-flex flex-column "}>
        //             <h5 className={"col d-flex align-items-end mb-0"}>Will Smith</h5>
        //             <p className={"col d-flex justify-content-start mb-0 text-info"}>Online</p>
        //         </div>
        //     </div>
        // </>
    );
}

export default ChatHeaderProfile;