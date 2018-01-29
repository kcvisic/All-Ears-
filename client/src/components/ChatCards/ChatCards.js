import React from "react";
import "./ChatCards.css";

const ChatCards = ({children, props}) => (

    <div className="panel panel-default">
      {children}
        {/* <div className="panel-body darkPanel"><h3>Currently Playing:</h3>
            <p className="roomDesc">{props.song}<br />
                {props.artist}</p>
            <a href={"/grooveroom/" + props.id} className="btn btn-primary">Go To Room</a>
</div> */}
    </div>
);

export default ChatCards;