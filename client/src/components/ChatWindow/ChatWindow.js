import React from "react";

const ChatWindow = props => (

    <div className="chat-mod">
        <div className="chatbox">
            <div className="chatlogs">
                <div className="chat friend">
                    <p className="chat-message">This song is awesome</p>
                </div>
                <div className="chat self">
                    <p className="chat-message">I agreee!</p>
                </div>
            </div>
            <div className="chat-form">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>

)

export default ChatWindow;