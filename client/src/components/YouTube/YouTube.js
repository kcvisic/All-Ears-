import React from "react";
import API from "../../utils/API";

function YouTube(props){

    return (
            <div className="youtube-holder">
            <iframe className="youtube" width="100%" height="315" src={"https://www.youtube.com/embed/" + props.id} frameborder="0" allowfullscreen></iframe>
          
        </div>
    
    )
}





export default YouTube;
