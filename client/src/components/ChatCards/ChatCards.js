import React from "react";
import "./ChatCards.css";

const ChatCards = props => (

    <div className="panel panel-default">
        <div className="panel-heading">
            <h4>{props.name}</h4></div>
            <div className="panel-body darkPanel"><h3>Currently Playing:</h3>
            <p className="roomDesc">{props.song}<br />
                                      {props.artist}</p>
            <a href="" className="btn btn-primary">Go To Room</a>
            </div>
</div>
);

export default ChatCards;