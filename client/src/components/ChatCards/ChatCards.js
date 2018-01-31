import React from "react";
import "./ChatCards.css";

const ChatCards = ({children, props}) => (

    <div className="panel panel-default">
      {children}
    </div>
);

export default ChatCards;